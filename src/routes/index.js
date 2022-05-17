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

export async function get({ fetch }) {
  const client = createClient('climateforward', { fetch })
  const document = await client.getByUID('page', 'homepage', { graphQuery })
  return document ? { body: { page: document } } : { status: 404 }
}
