// astro.config.mjs
// REVISI FINAL - Dijamin menghasilkan sitemap yang benar

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// --- PERBAIKAN UTAMA ADA DI SINI ---
// Jadikan domain produksi Anda sebagai nilai default.
const site = process.env.PUBLIC_SITE_URL || 'https://wp-to-astro.pages.dev';

export default defineConfig({
  site, // <-- Sitemap akan menggunakan nilai ini
  output: 'static',

  vite: {
    plugins: [tailwindcss( )],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    }
  },

  integrations: [
    // Saya sederhanakan sitemap() karena pengaturan default sudah bagus.
    sitemap(), 
    react()
  ],

  image: {
    remotePatterns: [
      { protocol: "https" },
      { protocol: "http" }
    ]
  }
} );
