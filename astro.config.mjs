// astro.config.mjs
// KODE FINAL - Cukup salin dan tempel ini.

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static', // <-- INI SATU-SATUNYA TAMBAHAN PENTING UNTUK CLOUDFLARE

  vite: {
    plugins: [tailwindcss( )], // Ini sudah benar untuk proyek Anda
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
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }), 
    react()
  ],

  image: {
    remotePatterns: [
      { protocol: "https" },
      { protocol: "http" }
    ]
  }
} );
