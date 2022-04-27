import { createClient } from '@prismicio/client'
import { query as slicesQuery } from '$lib/Slices.svelte'

const graphQuery = `
  {
    event {
      ...eventFields
      body ${slicesQuery}
    }
  }
`

/**
 * @param {any} event
 * @returns
 */
export async function get ({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const page = await client.getByUID('page', params.page, { graphQuery })
  return page ? { body: { page } } : { status: 404 }
}
