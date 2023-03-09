import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  appType: 'mpa',
  server: {
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080/',
    //     changeOrigin: true,
    //   },
    //   '/demo': {
    //     target: 'http://localhost:8080/',
    //     changeOrigin: true,
    //   },
    // }, 
  },
  build: {
    emptyOutDir: true,
    // outDir: '../airkospo/src/main/resources/static/',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        density: resolve(__dirname, 'density/index.html'),
        around: resolve(__dirname, 'around/index.html'),
        discharge: resolve(__dirname, 'discharge/index.html'),
      }
    }
  },
})
