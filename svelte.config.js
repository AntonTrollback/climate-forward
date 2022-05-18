import adapter from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    adapter: adapter({ edge: true }),
    prerender: {
      default: true
    }
  }
}

export default config
