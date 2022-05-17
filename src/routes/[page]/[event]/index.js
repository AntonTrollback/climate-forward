import { createClient } from '@prismicio/client'
import { eventBody, pageBody } from '$lib/Slices.svelte'

const graphQuery = `
  {
    event {
      ...eventFields
      body ${eventBody}
    }
    page {
      ...pageFields
      body ${pageBody}
    }
  }
`

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  console.log(graphQuery)
  const [page, event] = await Promise.all([
    client.getByUID('page', params.page, { graphQuery }),
    client.getByUID('event', params.event, { graphQuery })
  ])
  return page && event ? { body: { page, event } } : { status: 404 }
}
