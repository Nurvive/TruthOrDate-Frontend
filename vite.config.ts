import suidPlugin from '@suid/vite-plugin';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
