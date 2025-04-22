import showcase from 'astro-dev-toolbar-showcase';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [showcase()],
});
