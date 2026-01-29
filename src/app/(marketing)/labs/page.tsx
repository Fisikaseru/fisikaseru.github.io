import { Container } from "@/components/layout/Container";
import { LabCard } from "@/components/labs/LabCard";

const labs = [
  {
    title: "Lab Gerak Lurus",
    description: "Simulasi kinematika dengan alur stage 01–08.",
    href: "/labs/simulations/gerak-lurus-01",
    tags: ["kinematika", "SMA"]
  }
];

export default function LabsPage() {
  return (
    <Container className="space-y-8 py-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-neutral">Katalog Labs</h1>
        <p className="text-neutral/70">
          Semua lab dirancang dengan template nasional agar guru dan siswa belajar dalam alur
          yang sama.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {labs.map((lab) => (
          <LabCard key={lab.title} {...lab} />
        ))}
      </div>
    </Container>
  );
}
