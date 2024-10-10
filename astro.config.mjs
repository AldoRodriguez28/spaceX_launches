// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://AldoRodriguez28.github.io',
  base: 'spaceX_launches',
  integrations: [tailwind()]
});