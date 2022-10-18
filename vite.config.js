import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  resolve: {
    alias: {
      components: path.join(path.resolve(), 'src/components'),
      helpers: path.join(path.resolve(), 'src/helpers'),
    },
  },
})
