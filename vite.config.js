import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        redes: resolve(import.meta.dirname, 'redes.html'),
        temas: resolve(import.meta.dirname, 'temas.html'),
        apps: resolve(import.meta.dirname, 'apps.html'),
        equipo: resolve(import.meta.dirname, 'equipo.html'),
      },
    },
  },
});
