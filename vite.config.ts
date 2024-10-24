/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [ './src/main.tsx', '**/*.cjs', '**/*.d.ts', 'vite.config.ts' ],
      reporter: ['lcov', 'json', 'html', 'json-summary'],
    },
  }
})