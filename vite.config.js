import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: './',
    plugins: [react()],
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          framer: ['framer-motion'],
          lottie: ['lottie-web', '@lottiefiles/react-lottie-player'],
        }
      }
    }
  }
})


