import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionSyncSchema } from "@/lib/validators";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = SessionSyncSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ status: "ok", synced: false });
  }

  const user = await db.user.findUnique({ where: { email: session.user.email } });
  if (!user) {
    return NextResponse.json({ status: "ok", synced: false });
  }

  await db.auditLog.create({
    data: {
      actorUserId: user.id,
      action: "sync_session",
      entityType: "SessionSnapshot",
      entityId: parsed.data.sessionSnapshot.simulation.slug,
      meta: parsed.data.sessionSnapshot
    }
  });

  return NextResponse.json({ status: "ok", synced: true });
}
