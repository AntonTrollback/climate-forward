import adapter from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  }
}

export default config
