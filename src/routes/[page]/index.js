import { createClient } from '@prismicio/client'
import { pageBody } from '$lib/Slices.svelte'

const graphQuery = `
  {
    page {
      ...pageFields
      body ${pageBody}
    }
  }
`

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const page = await client.getByUID('page', params.page, { graphQuery })
  return page ? { body: { page } } : { status: 404 }
}
