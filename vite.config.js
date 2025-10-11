import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'classic'
  })],
  esbuild: {
    loader: "jsx",
    include: [/src\/.*\.js$/, /src\/.*\.jsx$/], // or just /\.js$/
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
