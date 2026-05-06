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
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
})
