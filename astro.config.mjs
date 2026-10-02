// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site:
// https://syedmehedihussain.github.io/system-design-crash-course/
export default defineConfig({
  site: 'https://syedmehedihussain.github.io',
  base: '/system-design-crash-course',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
});
