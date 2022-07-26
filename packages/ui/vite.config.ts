import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

const resolve = (...args: string[]) => path.resolve(__dirname, ...args);

// https://vitejs.dev/config/
export default defineConfig({
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
      formats: ['es'],
      fileName: 'ui'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        'styled-components',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router': 'ReactRouter',
          'react-router-dom': 'ReactRouterDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
})
