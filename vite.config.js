import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// การตั้งค่า Vite
export default defineConfig({
  plugins: [
    // ใช้ plugin สำหรับ React เพื่อสนับสนุน JSX และ HMR
    react(),
    
    // Progressive Web App support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'React App',
        short_name: 'ReactApp',
        description: 'A React application using Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  // การตั้งค่าเซิร์ฟเวอร์สำหรับการพัฒนา
  server: {
    port: 3000, // กำหนดพอร์ตให้กับเซิร์ฟเวอร์
    open: true, // เปิดเบราว์เซอร์อัตโนมัติเมื่อเซิร์ฟเวอร์เริ่มทำงาน
  },
  // การตั้งค่าสำหรับการบิลด์ (การผลิต)
  build: {
    sourcemap: true, // สร้าง sourcemaps สำหรับ debugging
    outDir: 'build', // กำหนดโฟลเดอร์ output สำหรับการบิลด์
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  // การตั้งค่าอื่น ๆ
  resolve: {
    alias: {
      '@': '/src' // สร้าง alias ให้ใช้ '@' แทน '/src' เพื่อทำให้ import ง่ายขึ้น
    }
  }
});
