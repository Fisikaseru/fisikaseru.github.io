import { Container } from "@/components/layout/Container";
import { LabCard } from "@/components/labs/LabCard";

const simulations = [
  {
    title: "Gerak Lurus 01",
    description: "Simulasi utama untuk kinematika dasar.",
    href: "/labs/simulations/gerak-lurus-01",
    tags: ["simulasi", "01–08"]
  }
];

export default function SimulationsPage() {
  return (
    <Container className="space-y-8 py-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-neutral">Katalog Simulasi</h1>
        <p className="text-neutral/70">
          Pilih simulasi berdasarkan topik, tingkat kesulitan, dan target capaian.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {simulations.map((simulation) => (
          <LabCard key={simulation.title} {...simulation} />
        ))}
      </div>
    </Container>
  );
}
