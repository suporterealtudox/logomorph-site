import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // caminhos relativos: o mesmo build serve a raiz de um domínio
  // e uma subpasta (ex.: promobit-ac.com.br/logomorph/)
  base: './',
  build: { outDir: 'dist' },
  server: { port: 5173 },
});
