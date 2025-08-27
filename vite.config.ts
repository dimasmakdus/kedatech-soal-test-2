/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // bisa pakai global seperti describe, it, expect
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});