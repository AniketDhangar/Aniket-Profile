import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
  },
  base: '/', // Set the base URL (adjust if hosting in a subdirectory)
});
