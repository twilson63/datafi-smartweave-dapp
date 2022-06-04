import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from 'fs'

const { dependencies } = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if ([].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://')
const publicUrl = `3000-${host}`

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [svelte()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  server: {
    hmr: {
      clientPort: host ? 443 : 24678,
      host: host
        ? publicUrl
        : "localhost",
    }
  }
})
