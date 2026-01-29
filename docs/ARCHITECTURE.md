# FisikaSeru National Architecture

## Overview
FisikaSeru dibangun sebagai aplikasi Next.js App Router production-first di Vercel. Semua konten publik dapat diakses tanpa login, sedangkan aksi download laporan membutuhkan autentikasi OAuth.

## Core Layers
- **App Router**: Halaman marketing dan lab berada di `src/app`.
- **API Routes**: Route handler untuk auth, laporan PDF, session sync, assets, dan telemetry.
- **Data**: Prisma + Postgres dengan model audit dan analytics.

## Reliability & Observability
- Error boundary di UI.
- Rate limit dasar di `/api/reports`.
- Log audit saat sinkronisasi dan download.

## Deployment
- Vercel + Postgres (Prisma).
- Vercel Blob untuk laporan PDF.
