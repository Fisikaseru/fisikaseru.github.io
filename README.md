# FisikaSeru - GitHub Pages Site

FisikaSeru menyediakan laboratorium eksperimen fisika berbasis data dengan pipeline ilmiah lengkap.

🌐 **Live Site**: [fisikaseru.github.io](https://fisikaseru.github.io) (atau fisikaseru.github.io jika repository ini di-rename)

## Tentang

Ini adalah versi GitHub Pages dari FisikaSeru yang berisi:
- Laboratorium fisika interaktif berbasis web
- Simulasi fisika modern (Milikan, Photoelectric, dll)
- Simulasi fisika klasik (Projectile Motion, SHM, dll)
- Antarmuka pembelajaran yang responsif

## Struktur

```
/css              # Styling Tailwind yang sudah di-build
/pages            # Halaman HTML (landing, simulations hub, contact, about)
/labs/simulations # Lab interaktif lengkap dengan stages
/public           # JavaScript core (physics-core.js, data-analysis.js, dll)
/core             # Source persamaan fisika
index.html        # Entry point dengan redirect ke landing page
```

## Penggunaan

Situs ini adalah static site yang bisa langsung dibuka:
1. Clone repository ini
2. Buka `index.html` di browser, atau
3. Gunakan HTTP server: `npx http-server . -p 8080`

## GitHub Pages Setup

Untuk deploy sebagai GitHub Pages:

### Opsi 1: Organization Site (Recommended)
1. Rename repository ini menjadi `fisikaseru.github.io`
2. Di Settings → Pages, pilih source: `Deploy from a branch`
3. Pilih branch `main` dan folder `/` (root)
4. Site akan tersedia di `https://fisikaseru.github.io`

### Opsi 2: Project Site
1. Di Settings → Pages, enable GitHub Pages
2. Pilih source: `Deploy from a branch`
3. Pilih branch `main` dan folder `/` (root)
4. Site akan tersedia di `https://fisikaseru.github.io/fisikaseru`

## Catatan

- Ini adalah versi static-only dari aplikasi penuh
- Untuk versi lengkap dengan OAuth dan backend Express, lihat: [farrelfz/fisikaseru-full](https://github.com/farrelfz/fisikaseru-full)
- Semua persamaan fisika berada di folder `core/`
- Simulasi menggunakan `public/js/core/physics-core.js` sebagai entrypoint fisika

## Lisensi

MIT