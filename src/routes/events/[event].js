import { createClient } from '@prismicio/client'

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('event', params.event)
  return document ? { body: { event: document } } : { status: 404 }
}
