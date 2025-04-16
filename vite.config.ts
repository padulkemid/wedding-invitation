import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
  server: {
    allowedHosts: [
      '.ngrok-free.app'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
