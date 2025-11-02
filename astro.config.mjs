// astro.config.mjs
// REVISI - Mencoba memperbaiki konflik integrasi

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';

const site = process.env.PUBLIC_SITE_URL || 'https://wp-to-astro.pages.dev';

export default defineConfig({
  site,
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

  // --- PERUBAHAN UTAMA ADA DI SINI ---
  // Kita akan mengonfigurasi astro-icon secara eksplisit.
  integrations: [
    sitemap(), 
    react(), 
    icon({
      // Menambahkan konfigurasi ini terkadang membantu Astro
      // untuk menemukan set ikon dengan benar.
      include: {
        lucide: ['*'], // Sertakan semua ikon dari set 'lucide'
      }
    })
  ],

  image: {
    remotePatterns: [
      { protocol: "https" },
      { protocol: "http" }
    ]
  }
} );
