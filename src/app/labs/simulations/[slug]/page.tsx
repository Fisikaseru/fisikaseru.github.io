import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { StageNav } from "@/components/labs/StageNav";

const simulationMeta = {
  slug: "gerak-lurus-01",
  title: "Simulasi Gerak Lurus",
  description: "Eksplorasi GLB dan GLBB dengan alat bantu visual dan data realtime."
};

export default function SimulationOverviewPage() {
  return (
    <Container className="space-y-8 py-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-neutral">{simulationMeta.title}</h1>
        <p className="text-neutral/70">{simulationMeta.description}</p>
        <StageNav slug={simulationMeta.slug} />
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-neutral">Ringkasan</h2>
        <p className="mt-2 text-sm text-neutral/70">
          Simulasi ini menggunakan template nasional stage 01–08. Mulai dari pre-test hingga
          laporan akhir yang dapat diunduh setelah login.
        </p>
        <Link
          href={`/labs/simulations/${simulationMeta.slug}/stage/1`}
          className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white focus-ring"
        >
          Mulai Stage 01
        </Link>
      </div>
    </Container>
  );
}
