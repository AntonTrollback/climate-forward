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
  const page = await client.getByUID('page', params.page, { graphQuery })
  return page ? { body: { page } } : { status: 404 }
}
