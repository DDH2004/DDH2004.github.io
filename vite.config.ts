import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
  base: '/DDH2004.github.io/', // Add this line with your repo name
  plugins: [
    react(),
    markdown({
      mode: 'html' // Using just html mode to avoid TypeScript errors
    })
  ]
});
