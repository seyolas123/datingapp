import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

/**
  * https://vitejs.dev/config/
  * @type {import('vite').UserConfig}
  */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        //nested: resolve(__dirname, 'nested/index.html')
      }
    }
  },
  
})
