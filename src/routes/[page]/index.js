import { createClient } from '@prismicio/client'

/**
 * @param {any} event
 * @returns
 */
export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('page', params.page)
  return document ? { body: { page: document } } : { status: 404 }
}
