# ORG CLEANUP MASTER PLAN — Fisikaseru

Dokumen ini memenuhi output Phase 0 dan rangka kerja Phase 1–3 untuk merapikan organisasi GitHub **Fisikaseru**. Bahasa: Indonesia.

## Ringkasan Strategi
- **Arsitektur default:** Monorepo `fisikaseru.github.io` sebagai _frontdoor_ + folder `labs/simulations/<slug>` untuk seluruh simulasi. Setelah migrasi, repo simulasi per-topik di-archive dengan README deprecated/redirect.
- **Repositori utama (dipin):** `fisikaseru.github.io`, `fisikaseru-full` (backend+auth, eksternal), `fisikaseru-design` (opsional UI assets jika ada/akan dibuat), `fisikaseru-content` (opsional materi/markdown), `fisikaseru-labs` (hanya jika pilih alternatif multi-repo). Maks 6 pin; detail di bagian Pinning Plan.
- **Topik standar global:** `fisikaseru`, `physics`, `education`, `simulation`, `lab`, `github-pages`, `indonesia`.
- **Status penanganan:** Simulasi per-topik → **MIGRATE-INTO** monorepo lalu **ARCHIVE**; placeholder/README-only → **DEPRECATE** + **ARCHIVE**; main site **KEEP**.

## REPO MAP (Phase 0)
Repo | Kategori | Status Target | Alasan | Tindakan
--- | --- | --- | --- | ---
fisikaseru.github.io | Website | KEEP | Frontdoor + host pages & simulasi | Perkaya README, standar dokumen, set topics/homepage, pin
Bandul_Fisis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi topik bandul fisis | Pindah ke `labs/simulations/bandul-fisis`, README deprecated lalu archive
Bandul_Matematis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi bandul matematis | Sama seperti di atas
Difraksi_dan_Interferensi_Cahaya | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi optik | Migrasi ke labs, archive
Efek_Fotoelektrik | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi fotoelektrik | Migrasi ke labs, archive
Efek_Zeeman | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi efek Zeeman | Migrasi ke labs, archive
Eksperimen_Milikan | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi muatan elektron | Migrasi ke labs, archive
Energi_Mekanik | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi energi mekanik | Migrasi ke labs, archive
Fisika_Kuantum_Dasar | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi kuantum dasar | Migrasi ke labs, archive
Fluida_Dinamis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi fluida | Migrasi ke labs, archive
Fluida_Statis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi fluida | Migrasi ke labs, archive
Gaya_Lorentz | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi EM | Migrasi ke labs, archive
Gelombang_Mekanik | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi gelombang | Migrasi ke labs, archive
Gerak_Harmonik_Sederhana | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi GHS | Migrasi ke labs, archive
Gerak_Lurus | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi GLB/GLBB | Migrasi ke labs, archive
Gerak_Melingkar | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi GM | Migrasi ke labs, archive
Gerak_Parabola | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi parabola | Migrasi ke labs, archive
Gerak_Partikel_Bermuatan | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi partikel bermuatan | Migrasi ke labs, archive
Gesekan | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi gaya gesek | Migrasi ke labs, archive
Hamburan_Compton | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi Compton | Migrasi ke labs, archive
Hukum_Archimedes | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi hidrostatis | Migrasi ke labs, archive
Hukum_Gravitasi_Newton | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi gravitasi | Migrasi ke labs, archive
Hukum_Hooke | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi pegas | Migrasi ke labs, archive
Hukum_Newton | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi dinamika | Migrasi ke labs, archive
Hukum_Ohm | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi listrik | Migrasi ke labs, archive
Hukum_Pascal | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi fluida | Migrasi ke labs, archive
Hukum_Planck | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi radiasi | Migrasi ke labs, archive
Induksi_Elektromagnetik | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi EM | Migrasi ke labs, archive
Interferensi_Gelombang | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi interferensi | Migrasi ke labs, archive
Kapasitor_dan_Induktor | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi rangkaian | Migrasi ke labs, archive
Kalor_Jenis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi kalor | Migrasi ke labs, archive
Konduksi_Kalor | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi kalor | Migrasi ke labs, archive
Konveksi_dan_Radiasi | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi kalor | Migrasi ke labs, archive
Kuantisasi_Energi | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi kuantum | Migrasi ke labs, archive
Lensa_dan_Cermin | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi optik | Migrasi ke labs, archive
Momentum_dan_Impuls | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi momentum | Migrasi ke labs, archive
Pemantulan_Cahaya | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi optik | Migrasi ke labs, archive
Pembiasan_Cahaya | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi optik | Migrasi ke labs, archive
Pemuaian | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi termal | Migrasi ke labs, archive
Pengukuran_Muatan_Elektron | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi eksperimen | Migrasi ke labs, archive
Radioaktivitas | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi nuklir | Migrasi ke labs, archive
Rangkaian_Seri_Paralel | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi rangkaian | Migrasi ke labs, archive
Resonansi | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi gelombang | Migrasi ke labs, archive
Spektrum_Balmer | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi spektrum | Migrasi ke labs, archive
Spektrum_Cahaya | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi spektrum | Migrasi ke labs, archive
Spektrum_Emisi_Atom | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi spektrum | Migrasi ke labs, archive
Spektrum_Hidrogen | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi spektrum | Migrasi ke labs, archive
Tekanan_Hidrostatis | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi fluida | Migrasi ke labs, archive
Teori_Relativitas | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi relativitas | Migrasi ke labs, archive
Termometer_dan_Kalibrasi | Simulations | MIGRATE-INTO → ARCHIVE | Simulasi termal | Migrasi ke labs, archive
Gerak_Matematis (jika ada duplikasi) | Simulations | MERGE/DEDUP → ARCHIVE | Hindari duplikasi konten | Gabung ke slug sama, archive
Repos placeholder lain (jika muncul) | Placeholder | DEPRECATE → ARCHIVE | README-only | Tambah README deprecated, archive

## PINNING PLAN (maks 6)
1. `fisikaseru.github.io` — frontdoor, demo, labs.
2. `fisikaseru-full` — backend/OAuth (referensi lanjutan).
3. `fisikaseru-design` (opsional) — asset/UX konsisten.
4. `fisikaseru-content` (opsional) — materi/markdown terkurasi.
5. `fisikaseru-labs` (hanya jika alternatif multi-repo dipilih; jika tidak, gunakan slot untuk repo showcase simulasi unggulan).
6. Slot fleksibel untuk spotlight simulasi unggulan (mis. `Eksperimen_Milikan`) sampai migrasi selesai.

## TOPICS STANDARD
- Wajib inti: `fisikaseru`, `physics`, `education`, `simulation`, `lab`, `github-pages`, `indonesia`.
- Opsional sesuai konteks: `web`, `interactive`, `curriculum`, `measurement`, `optics`, `mechanics`, `quantum`.
- Aturan: 5–10 topik per repo; gunakan kebab-case bahasa Inggris kecuali nama brand; konsisten urutan (brand dulu).

## Draft `.github/profile/README.md` (final siap commit)
```md
# Fisikaseru — Physics that clicks
Laboratorium fisika interaktif berbasis web untuk pelajar dan pendidik di Indonesia.

## Akses Cepat
- 🌐 Situs utama & demo: https://fisikaseru.github.io
- 📦 Kode sumber frontdoor + simulasi: fisikaseru.github.io
- 🔐 Versi lengkap (backend + OAuth): farrelfz/fisikaseru-full
- 🧪 Labs & simulasi: lihat folder `labs/simulations` atau repositori simulasi yang di-archive dengan tautan pengganti.

## Kontribusi
- Baca `CONTRIBUTING.md` (org-level) sebelum membuat issue/PR.
- Gunakan label: bug, enhancement, docs, good first issue, help wanted.

## Status Organisasi
- Repo aktif dipin di halaman organisasi.
- Repo simulasi per-topik: **dimigrasikan** ke monorepo lalu di-archive dengan README yang mengarahkan ke lokasi baru.

## Lisensi & Etika
- Kode: MIT (kecuali dinyatakan lain).
- Code of Conduct berlaku untuk seluruh repositori Fisikaseru.
```

## Template README (repo aktif)
```md
# <Nama Repo> — <tagline singkat>

**Status:** Active | Maintained (lihat badge CI jika ada)

## Demo
- Live: <link demo atau GitHub Pages>
- Dokumentasi cepat: <link docs/README>

## Quick Start
1. Clone: `git clone https://github.com/Fisikaseru/<repo>.git`
2. Install deps: `npm install` (atau abaikan jika static)
3. Run: `npm run dev` / `npm run build` / `npx http-server .`

## Struktur Folder
```
<root>/
 ├─ src/          # kode utama
 ├─ public/       # aset statis
 ├─ labs/         # (jika ada simulasi)
 └─ docs/         # dokumentasi
```

## Kontribusi
- Ikuti panduan di `CONTRIBUTING.md` (org-level).
- Gunakan issue template & PR template yang disediakan.

## Lisensi
MIT (kecuali dinyatakan lain di repo ini).
```

## Template README DEPRECATED
```md
# <Nama Repo> — DEPRECATED

Repositori ini telah dipindahkan/digantikan.

- Lokasi baru: https://github.com/Fisikaseru/fisikaseru.github.io/tree/main/labs/simulations/<slug>
- Demo: https://fisikaseru.github.io/labs/simulations/<slug>/
- Status: Diarsipkan; tidak menerima issue/PR.

Terima kasih telah menggunakan Fisikaseru.
```

## Issue/PR Templates (org-level `.github`)
- `.github/ISSUE_TEMPLATE/bug_report.md`: title prefix `[BUG]`, fields: ringkasan, langkah reproduksi, hasil aktual/ekspektasi, lingkungan.
- `.github/ISSUE_TEMPLATE/feature_request.md`: title prefix `[FEAT]`, fields: deskripsi, masalah yang dipecahkan, usulan solusi, alternatif, dampak.
- `PULL_REQUEST_TEMPLATE.md`: ringkas, checklist lint/test, catatan breaking change, screenshot (jika UI), link issue.
- `CONTRIBUTING.md`: alur fork/branch, commit message konvensi (`type: subject`), cara run test/build, SLA review, label guide.
- `CODE_OF_CONDUCT.md`: gunakan Contributor Covenant 2.1 (English).
- Label guideline: `bug`, `enhancement`, `docs`, `chore`, `infra`, `good first issue`, `help wanted`, `priority:high/medium/low`, `status:blocked/in-progress/needs-info`.

## Phase Plan
- **Phase 0 (now):** Inventaris repo, rencana, REPO MAP (selesai di dokumen ini).
- **Phase 1:** Org frontdoor — buat repo `.github`, isi profile README, set topics global, tetapkan pin, pastikan description/homepage tiap repo KEEP.
- **Phase 2:** Standardisasi metadata & docs — terapkan template README/CONTRIBUTING/CODE_OF_CONDUCT/ISSUE+PR templates pada repo KEEP; tambahkan LICENSE jika belum.
- **Phase 3:** Migrasi & Archive — pindahkan konten simulasi ke `fisikaseru.github.io/labs/simulations/<slug>`, pasang README deprecated di repo lama, lakukan archive, cek redirect/demo.

## GH CLI Commands (contoh)
- Set deskripsi & homepage:  
  `gh repo edit Fisikaseru/fisikaseru.github.io --description "Frontdoor & labs Fisikaseru" --homepage "https://fisikaseru.github.io"`
- Set topics:  
  `gh repo edit Fisikaseru/fisikaseru.github.io --add-topic fisikaseru --add-topic physics --add-topic education --add-topic simulation --add-topic lab --add-topic github-pages --add-topic indonesia`
- Archive repo:  
  `gh repo archive Fisikaseru/Bandul_Fisis --yes`
- Rename (jika perlu):  
  `gh repo rename fisikaseru-labs`
- Create `.github` repo:  
  `gh repo create Fisikaseru/.github --private=false --add-readme`
- Create issue/PR templates (setelah clone `.github`): tambah file sesuai draft lalu `git push`.

## Checklist QA (perubahan harus lolos)
- Link demo utama & Pages tetap berfungsi.
- Build GitHub Pages tetap sukses (root deploy).
- README deprecated memuat link pengganti yang valid.
- Tidak ada repo inti yang diduplikasi/terpecah tanpa rencana.
- Semua repo KEEP memiliki: README standar, LICENSE, link ke CONTRIBUTING & CoC, issue/PR template aktif.

## Catatan Implementasi
- Saat migrasi, pertahankan slug folder untuk menjaga URL GitHub Pages.
- Untuk simulasi yang butuh asset khusus, gunakan struktur: `labs/simulations/<slug>/{index.html, README.md, assets/, src/, data/}`.
- Jalankan link checker ringan pada README/Docs via GitHub Actions (opsional) setelah Phase 1.

