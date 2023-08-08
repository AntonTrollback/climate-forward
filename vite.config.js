import { sveltekit } from '@sveltejs/kit/vite'

const config = {
  plugins: [sveltekit()],
  build: {
    minify: false
  }
}

export default config
