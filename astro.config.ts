import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { site } from './src/data/site';

// https://astro.build/config
export default defineConfig({
  // `site` is required for sitemap.xml and for absolute Open Graph URLs.
  site: site.url,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
