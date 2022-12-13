import { error } from '@sveltejs/kit'
import { createClient } from '@prismicio/client'
import { load as eventLoader } from '../../+page.js'

export async function load({ fetch, params }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [speaker, data] = await Promise.all([
      client.getByUID('speaker', params.speaker),
      eventLoader(...arguments)
    ])
    return { ...data, speaker }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
