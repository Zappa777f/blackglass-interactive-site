import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

const filename = fileURLToPath(import.meta.url);
const directory = dirname(filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(directory, 'index.html'),
      },
    },
  },
});