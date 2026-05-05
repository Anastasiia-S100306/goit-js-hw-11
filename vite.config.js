import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/goit-js-hw-11/', 
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
});