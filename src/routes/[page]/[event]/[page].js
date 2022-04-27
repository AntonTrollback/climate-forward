import { createClient } from '@prismicio/client'

/**
 * @param {any} event
 * @returns
 */
export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [page, event] = await Promise.all([
    client.getByUID('page', params.page),
    client.getByUID('event', params.event)
  ])
  return page && event ? { body: { page, event } } : { status: 404 }
}
