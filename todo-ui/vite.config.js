import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // root: './src',
    outDir: 'build',
    mimeTypes: {
      'application/javascript': ['js','jsx']
    }
  },
  plugins: [react()],
  server:{
    port: 3000
  }
})
