import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: '.', // Build in the same directory (docs/)
    emptyOutDir: false, // Don't delete source files
  }
})
