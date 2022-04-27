import { createClient } from '@prismicio/client'
import Slices from '$lib/Slices.svelte'

const graphQuery = `
  {
    event {
      ...eventFields
      body ${Slices.query}
    }
    page {
      ...pageFields
      body ${Slices.query}
    }
  }
`
/**
 * @param {any} event
 * @returns
 */
export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [page, event] = await Promise.all([
    client.getByUID('page', params.page, { graphQuery }),
    client.getByUID('event', params.event, { graphQuery }),
    client.getByUID('page', params.content, { graphQuery })
  ])
  return page && event ? { body: { page, event, content } } : { status: 404 }
}
