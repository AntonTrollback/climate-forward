import { createClient } from '@prismicio/client'
import * as event from '../index.js'

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [speaker, { body }] = await Promise.all([
    client.getByUID('speaker', params.speaker),
    event.get(...arguments)
  ])
  return speaker && body ? { body: { ...body, speaker } } : { status: 404 }
}
