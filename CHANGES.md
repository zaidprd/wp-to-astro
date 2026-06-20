# CHANGES.md — Ringkasan Perubahan SEO & Redesign

Tanggal: 2026-06-20  
Project: jayakonsultanbisnis.com (Astro v5 + Sanity CMS)

---

## Ringkasan Eksekutif

**Root cause 66 halaman tidak diindeks Google:** Artikel dari Sanity yang ditulis dengan Block Editor (PortableText) di-render menggunakan `<PortableTextRenderer client:load>` — konten muncul SETELAH JavaScript dijalankan. Google mengcrawl HTML statis yang kosong → thin content → tidak diindeks.

**Solusi utama:** Hapus komponen React client-side, ganti dengan fungsi `portableTextToHtml()` inline yang berjalan saat build time (SSG). Konten artikel sekarang ada di HTML statis.

---

## SEO Fixes

### FIX #1 — PortableText Rendering (PALING KRITIS)
**File:** `src/pages/[slug].astro`  
**Masalah:** `<PortableTextRenderer client:load>` membuat konten artikel tidak terlihat oleh Google  
**Solusi:** Hapus import React component, tulis fungsi `portableTextToHtml()` yang render di build time. Mendukung: h1-h6, blockquote, bold, italic, underline, strike, code, link, gambar Sanity.

### FIX #2 — `useCdn: false` di Sanity Client
**File:** `src/lib/sanity.ts`  
**Masalah:** `useCdn: true` bisa mengembalikan data stale saat build  
**Solusi:** Ganti ke `useCdn: false` agar build selalu ambil data terbaru dari Sanity.

### FIX #3 — `lang="id"` pada HTML tag
**File:** `src/layouts/Layout.astro`  
**Masalah:** `<html lang="en">` — salah bahasa untuk konten Indonesia  
**Solusi:** Ganti ke `lang="id"`.

### FIX #4 — Hapus `<meta name="generator">`
**File:** `src/layouts/Layout.astro`  
**Masalah:** Mengekspos teknologi stack (Astro) kepada crawler  
**Solusi:** Tag dihapus.

### FIX #5 — Google Maps alamat kantor yang benar
**File:** `src/pages/contact-us/index.astro`  
**Masalah:** Embed maps menunjuk alamat placeholder/salah  
**Solusi:** Update ke alamat real: Jl. H Taha No 2K Kelapa Dua Kebon Jeruk, Jakarta Barat.

### FIX #6 — robots.txt tanpa trailing space
**File:** `public/robots.txt`  
**Masalah:** Trailing space setelah URL sitemap bisa menyebabkan parser error  
**Solusi:** Hapus trailing space.

### FIX #7 — Article JSON-LD Schema di halaman blog
**File:** `src/pages/[slug].astro`  
**Solusi:** Tambah schema `@type: Article` dengan `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher`.

### FIX #8 — Organization JSON-LD Schema di homepage
**File:** `src/pages/index.astro`  
**Solusi:** Tambah schema `@type: Organization` dengan nama, URL, logo, kontak, area layanan.

### FIX #9 — Judul halaman blog dinamis per halaman
**File:** `src/components/blog/PaginatedBlogLayout.astro`  
**Masalah:** Semua halaman pagination `/blog/2`, `/blog/3` dst. punya title yang sama  
**Solusi:** Title dinamis "Blog Halaman 2 | ..." + tambah `rel=prev` / `rel=next` canonical pagination links.

### FIX #10 — `ogType="article"` untuk halaman artikel
**File:** `src/pages/[slug].astro` + `src/layouts/Layout.astro`  
**Solusi:** Pass `ogType` prop ke Layout; artikel mendapat `og:type = article`, halaman lain `website`.

### FIX #11 — AdSense dari `<head>` ke sebelum `</body>`
**File:** `src/layouts/Layout.astro`  
**Masalah:** Script iklan di `<head>` memperlambat LCP (render-blocking)  
**Solusi:** Pindahkan ke sebelum `</body>`.

### FIX #12 — AOS init via `astro:page-load` bukan `DOMContentLoaded`
**File:** `src/layouts/Layout.astro`, `src/components/Header.astro`  
**Masalah:** ViewTransitions Astro tidak trigger `DOMContentLoaded` ulang; animasi AOS mati setelah navigasi  
**Solusi:** Ganti semua event listener ke `document.addEventListener('astro:page-load', ...)`.

### FIX #13 — Favicon fallback
**File:** `src/layouts/Layout.astro`  
**Solusi:** Tambah `<link rel="icon" href="/favicon.ico">` sebagai fallback selain `.webp`.

### FIX #14 — Data perusahaan real (bukan placeholder)
**File:** `src/data/config.ts`  
**Masalah:** Semua data template berisi placeholder (nama, kontak, URL)  
**Solusi:** Isi dengan data real PT Jaya Konsultan Bisnis.

---

## Redesign Komponen

### A — `src/styles/global.css`
Ganti palet warna: Navy `#1B3A6B` (primary) + Gold `#C8A84B` (secondary). Sebelumnya navy + hijau.

### B — `src/data/config.ts`
Data perusahaan real: nama, siteUrl, Instagram, Email, Phone, WhatsApp, Location.

### C — `src/data/menu.ts`
Label menu dalam bahasa Indonesia: Beranda, Layanan, Blog, Portofolio, Hubungi Kami.

### D — `src/data/categories.ts`
Kategori relevan: Studi Kelayakan, Business Plan, Riset Pasar, HBU, Konsultasi Bisnis.

### E — `src/layouts/Layout.astro`
- Prop baru: `ogType`, `schema` (JSON-LD), `<slot name="head">`
- Semua SEO fixes (lihat atas)

### F — `src/components/Header.astro`
- CTA "Konsultasi Gratis" berwarna gold menuju WhatsApp
- Active link indicator dengan border-bottom
- Scroll shadow via `astro:page-load`
- Menu mobile dengan gold button

### G — `src/components/Footer.astro`
- Background navy, 4 kolom: branding, menu, layanan, kontak
- Data kontak real (phone, email, address, WhatsApp)
- Hanya link Instagram (hapus GitHub/Twitter)

### H — `src/components/sections/Hero.astro`
- Trust badges: 100+ proyek, 10+ tahun, 95% klien puas
- Wave SVG dekorasi bottom
- CTA button gold (secondary variant)
- Konten lebih spesifik ke jasa konsultan

### I — `src/pages/index.astro`
- Organization JSON-LD schema
- Grid 3 kartu layanan utama
- Section proses kerja (ProcessSection)
- Section testimoni (TestimoniSection)
- Konten hero diperbarui

### J — `src/components/sections/ProcessSection.astro` *(BARU)*
4 tahap proses kerja: Konsultasi Awal → Pengumpulan Data → Analisis → Presentasi

### K — `src/components/sections/TestimoniSection.astro` *(BARU)*
3 testimonial cards dengan bintang rating dan tag industri

### L — `src/pages/layanan.astro`
- Card grid dengan badge (Layanan Utama, Populer)
- Link ke halaman layanan baru yang dedicated
- Navy CTA section di bawah

### M — `src/pages/jasa-studi-kelayakan-bisnis.astro` *(BARU)*
- 6 aspek analisis studi kelayakan
- Tabel harga 3 tier: UMKM / Menengah / Enterprise
- Service JSON-LD schema

### N — `src/pages/jasa-business-plan.astro` *(BARU)*
- 6 komponen business plan
- Grid "cocok untuk" (startup, UMKM, KUR, investor, dll.)
- Service JSON-LD schema

### O — `src/pages/jasa-riset-pasar.astro` *(BARU)*
- 6 metode penelitian
- Daftar output/deliverables
- Service JSON-LD schema

### P — `src/pages/contact-us/index.astro`
- Form kontak → submit → buka WhatsApp dengan pesan terisi otomatis
- Google Maps embed alamat kantor Jakarta Barat yang benar
- Grid info kontak (alamat, WA, email, jam operasional)

### Q — `src/pages/[slug].astro`
- **KRITIS:** Hapus `<PortableTextRenderer client:load>`, ganti dengan `portableTextToHtml()` SSG
- Tambah breadcrumb navigasi
- Sidebar dengan CTA WhatsApp
- Tombol share (WhatsApp, copy link)
- Estimasi waktu baca
- Article JSON-LD schema
- `ogType="article"`

---

## Build Status

```
✓ 207 halaman berhasil di-build
✓ Tidak ada error build
✓ 2 WARN route conflict (jasa-studi-kelayakan-bisnis & jasa-business-plan) — normal, 
  halaman dedicated mengambil prioritas atas slug Sanity
```

---

## File yang Diubah

| File | Status |
|------|--------|
| `src/lib/sanity.ts` | Modified |
| `src/data/config.ts` | Modified |
| `src/data/menu.ts` | Modified |
| `src/data/categories.ts` | Modified |
| `src/styles/global.css` | Modified (full rewrite) |
| `src/layouts/Layout.astro` | Modified |
| `src/components/Header.astro` | Modified |
| `src/components/Footer.astro` | Modified |
| `src/components/sections/Hero.astro` | Modified |
| `src/components/sections/ProcessSection.astro` | **NEW** |
| `src/components/sections/TestimoniSection.astro` | **NEW** |
| `src/components/blog/PaginatedBlogLayout.astro` | Modified |
| `src/pages/index.astro` | Modified |
| `src/pages/layanan.astro` | Modified |
| `src/pages/jasa-studi-kelayakan-bisnis.astro` | **NEW** |
| `src/pages/jasa-business-plan.astro` | **NEW** |
| `src/pages/jasa-riset-pasar.astro` | **NEW** |
| `src/pages/contact-us/index.astro` | Modified |
| `src/pages/[slug].astro` | Modified (critical) |
| `public/robots.txt` | Modified |
