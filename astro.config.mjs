import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'hybrid',
  site: 'https://blue-wave-purifiers.pages.dev'
});