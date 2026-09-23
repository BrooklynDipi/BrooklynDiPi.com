import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths so the built site works at any address: the github.io
  // subfolder now, or brooklyndipi.com at the root later
  base: './',
})
