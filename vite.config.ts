import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preview from 'vite-live-preview'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preview()],
  
  // Build optimization
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true if you need debugging in production
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (['react', 'react-dom', 'react-router-dom'].some(p => id.includes(`/node_modules/${p}/`))) return 'react-vendor';
          if (['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'].some(p => id.includes(`/node_modules/${p}/`))) return 'mui-vendor';
          if (id.includes('/node_modules/@supabase/')) return 'supabase';
          if (id.includes('/node_modules/@paypal/')) return 'paypal';
          if (id.includes('/node_modules/zustand/')) return 'state';
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@data': path.resolve(import.meta.dirname, './src/data'),
      '@types': path.resolve(import.meta.dirname, './src/types'),
    },
  },
})
