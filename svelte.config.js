import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      enabled: true
    }
  }
}

export default config
