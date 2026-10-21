import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        redes: resolve(__dirname, 'redes.html'),
        temas: resolve(__dirname, 'temas.html'),
        apps: resolve(__dirname, 'apps.html'),
        equipo: resolve(__dirname, 'equipo.html'),
      },
    },
  },
});
