import { createClient } from '@prismicio/client'
import { graphQuery as bodyFields } from '$lib/Slices.svelte'

const graphQuery = `
  {
    event {
      ...eventFields
      body ${bodyFields}
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
    client.getByUID('event', params.event, { graphQuery })
  ])
  return page && event ? { body: { page, event } } : { status: 404 }
}
