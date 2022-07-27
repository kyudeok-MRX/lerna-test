import path from "path";
import { defineConfig, LibraryFormats } from "vite";
import react from "@vitejs/plugin-react";

const resolve = (...args: string[]) => path.resolve(__dirname, ...args);
const isProd = (mode: string) => mode === 'production'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { mode } = env
  const formats: LibraryFormats[] = isProd(mode) ? ['umd'] : ['umd', 'es']

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve('src/index.tsx'),
        name: 'core',
        formats,
        fileName: `core`,
      },
      sourcemap: isProd(mode) ? false : 'inline',
      rollupOptions: {
        external: ['react', 'react-dom', 'react-router', 'react-router-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router': 'ReactRouter',
            'react-router-dom': 'ReactRouterDOM',
          },
        },
      },
    },
  }
})
