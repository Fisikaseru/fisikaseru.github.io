import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DownloadRequestSchema } from "@/lib/validators";
import { db } from "@/lib/db";
import { put } from "@vercel/blob";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { readFile } from "fs/promises";
import path from "path";

const rateLimitMap = new Map<string, { count: number; last: number }>();

export const runtime = "nodejs";

function allowRequest(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) ?? { count: 0, last: now };
  const elapsed = now - entry.last;
  if (elapsed > 60_000) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return true;
  }
  if (entry.count >= 5) return false;
  rateLimitMap.set(ip, { count: entry.count + 1, last: entry.last });
  return true;
}

function hashIp(ip: string) {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

function renderReportHtml(payload: ReturnType<typeof DownloadRequestSchema.parse>) {
  const { sessionSnapshot } = payload;
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Laporan ${sessionSnapshot.simulation.title}</title>
  <style>__PRINT_CSS__</style>
</head>
<body>
  <h1>Laporan Praktikum</h1>
  <p><strong>Simulasi:</strong> ${sessionSnapshot.simulation.title}</p>
  <p><strong>Mulai:</strong> ${sessionSnapshot.simulation.startedAt}</p>
  <div class="section">
    <h2>Progress</h2>
    <p>Stage selesai: ${sessionSnapshot.progress.completedStages.join(", ")}</p>
  </div>
  <div class="section">
    <h2>Refleksi</h2>
    <p>${sessionSnapshot.stage.reflection.summary || "Belum ada."}</p>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowRequest(ip)) {
    return NextResponse.json({ error: "Rate limit" }, { status: 429 });
  }

  const body = await request.json();
  const parsed = DownloadRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const simulation = await db.simulation.findUnique({
    where: { slug: parsed.data.simulationSlug }
  });

  if (!simulation) {
    return NextResponse.json({ error: "Simulation not found" }, { status: 404 });
  }

  const printCss = await readFile(path.join(process.cwd(), "src/styles/print.css"), "utf-8");
  const html = renderReportHtml(parsed.data).replace("__PRINT_CSS__", printCss);

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
  await browser.close();

  const filename = `reports/${simulation.slug}/${Date.now()}.pdf`;
  const blob = await put(filename, pdfBuffer, { access: "public" });

  const user = await db.user.findUnique({ where: { email: session.user.email } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await db.reportArtifact.create({
    data: {
      userId: user.id,
      simulationId: simulation.id,
      sessionSnapshot: parsed.data.sessionSnapshot,
      pdfUrl: blob.url
    }
  });

  await db.downloadEvent.create({
    data: {
      userId: user.id,
      simulationId: simulation.id,
      ipHash: hashIp(ip),
      userAgent: request.headers.get("user-agent"),
      meta: { source: "download" }
    }
  });

  return NextResponse.json({ pdfUrl: blob.url });
}
