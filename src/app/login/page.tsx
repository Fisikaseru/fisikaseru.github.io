"use client";

import { signIn, useSession } from "next-auth/react";
import { Container } from "@/components/layout/Container";

export default function LoginPage() {
  const { status } = useSession();

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-xl space-y-6 rounded-3xl border border-primary/10 bg-white p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-neutral">Login untuk download laporan</h1>
        <p className="text-sm text-neutral/70">
          Semua konten simulasi tetap dapat diakses tanpa login. Login diperlukan hanya saat
          mengunduh PDF laporan.
        </p>
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white focus-ring"
          >
            Masuk dengan Google
          </button>
          <button
            type="button"
            onClick={() => signIn("github")}
            className="w-full rounded-full border border-primary/20 px-4 py-3 text-sm font-semibold text-primary focus-ring"
          >
            Masuk dengan GitHub
          </button>
        </div>
        {status === "authenticated" ? (
          <p className="text-xs text-success">Anda sudah login. Silakan kembali ke simulasi.</p>
        ) : null}
      </div>
    </Container>
  );
}
