import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://indobocah.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});