import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // root: './src',
    outDir: 'build',
  },
  esbuild: {
    loader: 'jsx',
  },
  mimeTypes: {
    'application/javascript': ['js','jsx']
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [react()],
  server:{
    port: 3000
  }
})
