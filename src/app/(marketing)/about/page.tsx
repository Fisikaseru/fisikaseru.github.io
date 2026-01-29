import { Container } from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <Container className="space-y-6 py-10">
      <h1 className="text-3xl font-semibold text-neutral">Tentang FisikaSeru</h1>
      <p className="text-neutral/70">
        FisikaSeru adalah platform pembelajaran fisika nasional yang menggabungkan simulasi,
        eksperimen virtual, dan laporan terstruktur agar siswa terbiasa dengan proses ilmiah.
      </p>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-neutral">Prinsip kami</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral/70">
          <li>Belajar aktif dengan alur stage 01–08 yang konsisten.</li>
          <li>Aksesibilitas dan performa sebagai prioritas utama.</li>
          <li>Konten publik, login hanya untuk download laporan resmi.</li>
        </ul>
      </div>
    </Container>
  );
}
