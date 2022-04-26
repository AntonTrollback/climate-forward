import { createClient } from '@prismicio/client'

/**
 * @param {any} event
 * @returns
 */
export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('event', params.event)
  return document ? { body: { document } } : { status: 404 }
}
