// src/lib/sanity.ts
// REVISI FINAL - Menggunakan Environment Variables

import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Ambil kredensial dari environment variables
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = "2023-10-23";

// Validasi: pastikan variabel ada
if (!projectId || !dataset) {
  throw new Error("Sanity projectId atau dataset tidak ditemukan. Pastikan variabel .env sudah diatur.");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `true` untuk produksi, `false` untuk development jika perlu
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
