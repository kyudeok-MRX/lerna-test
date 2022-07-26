import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolve = (...args: string[]) => path.resolve(__dirname, ...args);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve('src/index.tsx'),
      name: 'core',
      formats: ['es'],
      fileName: 'core',
    },
  },
});
