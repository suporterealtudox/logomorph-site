import { defineConfig } from 'vite';

export default defineConfig({
  // base relativa: o site funciona na raiz (Vercel) e tambem dentro de uma
  // subpasta (promobit-ac.com.br/logomorph/) sem precisar mudar nada.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
});
