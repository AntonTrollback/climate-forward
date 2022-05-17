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

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [page, event, content] = await Promise.all([
    client.getByUID('page', params.page, { graphQuery }),
    client.getByUID('event', params.event, { graphQuery }),
    client.getByUID('page', params.content, { graphQuery })
  ])
  return page && event ? { body: { page, event, content } } : { status: 404 }
}
