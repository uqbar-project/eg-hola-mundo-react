/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

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
      exclude: ['./src/main.tsx', '**/*.cjs', '**/*.d.ts', 'vite.config.ts'],
      reporter: ['lcov', 'json', 'html', 'json-summary'],
    },
  },
})
