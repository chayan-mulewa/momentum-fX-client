import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This binds the server to all available network interfaces
    port: 5173 // Or any port of your choice
  },
  plugins: [react()],
})
