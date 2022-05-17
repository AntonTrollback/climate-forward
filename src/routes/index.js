import { createClient } from '@prismicio/client'

export async function get({ fetch }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('page', 'homepage')
  return document ? { body: { page: document } } : { status: 404 }
}
