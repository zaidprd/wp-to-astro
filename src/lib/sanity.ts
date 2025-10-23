// src/lib/sanity.ts
// KODE LENGKAP YANG SUDAH DIPERBAIKI

import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: "lf9syc81", // Project ID Anda sudah benar
  dataset: "production",   // Dataset Anda sudah benar
  apiVersion: "2023-10-23",
  useCdn: true, // `true` baik untuk produksi, `false` untuk development jika butuh data instan
});

// --- TAMBAHKAN KODE INI UNTUK MEMBUAT FUNGSI urlFor ---

// 1. Buat builder gambar dari client Sanity
const builder = imageUrlBuilder(client);

// 2. Buat dan ekspor fungsi 'urlFor' agar bisa diimpor di file lain
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
