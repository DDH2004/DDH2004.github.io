import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
  base: './', // Change from '/DDH2004.github.io/' to './'
  plugins: [
    react(),
    markdown({
      mode: 'html'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // Ensure proper extensions for all files
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
