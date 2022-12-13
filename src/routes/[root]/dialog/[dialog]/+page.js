import { error } from '@sveltejs/kit'
import { createClient } from '@prismicio/client'
import { load as eventLoader } from '../../+page.js'

export async function load({ fetch, params }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [dialog, data] = await Promise.all([
      client.getByUID('dialog', params.dialog),
      eventLoader(...arguments)
    ])
    return { ...data, dialog }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
