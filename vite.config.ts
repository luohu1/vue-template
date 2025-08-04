import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: ['src/layouts/**', 'src/views/**'],
    }),
    Components({
      dts: 'src/types/components.d.ts',
      extensions: ['vue'],
      // dirs: ['src/components', 'src/layouts', 'src/views'],
      // include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],

  // 2. 路径别名配置
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // 3. 服务器配置
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true, // 自动打开浏览器
    proxy: { // API 代理配置
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    cors: true, // 启用 CORS
  },
})
