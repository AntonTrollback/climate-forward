import adapter from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    adapter: adapter({ edge: false })
  }
}

export default config
