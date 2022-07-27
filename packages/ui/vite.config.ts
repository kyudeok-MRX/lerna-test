import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, LibraryFormats } from 'vite'
import svgLoader from 'vite-svg-loader'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args);
const isProd = (mode: string) => mode === 'production'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { mode } = env
  const formats: LibraryFormats[] = isProd(mode) ? ['umd'] : ['umd', 'es']

  return {
    plugins: [
      react(),
      alias({
        entries: [
          {
            find: '@',
            replacement: resolve('src'),
          },
        ],
      }),
      svgLoader({
        defaultImport: 'url',
      }),
    ],
    build: {
      lib: {
        entry: resolve('src/index.ts'),
        name: 'ui',
        formats,
        fileName: `ui`,
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
