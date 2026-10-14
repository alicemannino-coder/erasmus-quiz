import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Works both at username.github.io and username.github.io/repository-name/.
  base: './',
  build: { outDir: 'docs' },
});
