import { createClient } from '@prismicio/client'
import { graphQuery as sessionFields } from '$lib/Session.svelte'
import * as event from '../index.js'

const graphQuery = `
  {
    session ${sessionFields}
  }
`

export async function get ({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [session, { body }] = await Promise.all([
    client.getByUID('session', params.session, { graphQuery }),
    event.get(...arguments)
  ])
  return session && body ? { body: { ...body, session } } : { status: 404 }
}
