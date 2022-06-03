import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://')
const publicUrl = `3000-${host}`

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [svelte()],
  server: {
    hmr: {
      clientPort: host ? 443 : 24678,
      host: host
        ? publicUrl
        : "localhost",
    }
  }
})
