import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    root: './src',
    outDir: 'build',
  },
  plugins: [react()],
  server:{
    port: 3000
  }
})
