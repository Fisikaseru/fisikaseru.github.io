# FisikaSeru National Platform

FisikaSeru adalah platform pembelajaran fisika nasional berbasis **Next.js App Router** yang siap deploy ke Vercel. Semua konten publik dapat diakses tanpa login, sedangkan **download PDF laporan** membutuhkan autentikasi Google/GitHub.

## Fitur Utama
- Next.js App Router + TypeScript (production-first).
- Prisma + Postgres dengan model audit & analytics.
- OAuth Google/GitHub hanya untuk download laporan.
- Template stage 01–08 untuk semua simulasi.
- 3D-ready dengan React Three Fiber.

## Setup Lokal

```bash
npm install
```

Copy `.env.example` ke `.env` dan isi variabel berikut:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
DATABASE_URL=postgresql://...
BLOB_READ_WRITE_TOKEN=...
```

### Database & Prisma

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### Jalankan Aplikasi

```bash
npm run dev
```

## OAuth Setup
- Google OAuth: gunakan callback URL `http://localhost:3000/api/auth/callback/google`.
- GitHub OAuth: gunakan callback URL `http://localhost:3000/api/auth/callback/github`.

## Menambah Simulasi Baru
1. Copy struktur folder `src/app/labs/simulations/[slug]`.
2. Perbarui metadata di halaman overview dan `StageClient`.
3. Pastikan kontrak session di `src/lib/session/types.ts` dipakai tanpa perubahan.

## Dokumentasi Teknis
Lihat folder `docs/` untuk standar UI/UX, template stage 01–08, kontrak session, dan pipeline asset 3D.

## Deployment
Aplikasi siap deploy ke Vercel. Pastikan environment variables dan database Postgres tersedia.
