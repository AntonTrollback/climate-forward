import { createClient } from '@prismicio/client'

/**
 * @param {object} event
 * @param {function(string, any): Promise<Response>} event.fetch
 * @param {object} event.params
 * @returns
 */
export async function get({ fetch }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('page', 'homepage')
  return document ? { body: { page: document } } : { status: 404 }
}
