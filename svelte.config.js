import adapter from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    adapter: adapter({ edge: true })
  }
}

export default config
