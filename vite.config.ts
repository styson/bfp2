import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preview from 'vite-live-preview'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),preview()],
})
