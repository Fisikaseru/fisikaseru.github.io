import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CanvasShell } from "@/components/three/CanvasShell";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white via-accent/40 to-white">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
            Platform fisika nasional
          </span>
          <h1 className="text-3xl font-semibold text-neutral sm:text-4xl lg:text-5xl">
            Belajar fisika melalui lab interaktif, simulasi 3D, dan laporan terstruktur.
          </h1>
          <p className="text-base text-neutral/70 sm:text-lg">
            FisikaSeru menghadirkan pengalaman pembelajaran yang konsisten, responsif, dan siap
            dipakai di sekolah-sekolah seluruh Indonesia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/labs"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow focus-ring"
            >
              Jelajahi Labs
            </Link>
            <Link
              href="/simulations"
              className="rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary shadow-sm focus-ring"
            >
              Lihat Simulasi
            </Link>
          </div>
          <div className="grid gap-3 rounded-2xl border border-primary/10 bg-white p-5 text-sm text-neutral/70 shadow-card sm:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-primary">01–08</p>
              <p>Stage belajar konsisten</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary">Offline-ready</p>
              <p>Progress tersimpan lokal</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary">3D-ready</p>
              <p>Asset aman & teroptimasi</p>
            </div>
          </div>
        </div>
        <CanvasShell className="h-[360px] w-full rounded-3xl border border-primary/10" />
      </Container>
    </div>
  );
}
