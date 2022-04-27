import { createClient } from '@prismicio/client'
import * as event from '../index.js'

export async function get({ fetch, params }) {
  const client = createClient('climateforward', { fetch })
  const [session, { body }] = await Promise.all([
    client.getByUID('session', params.session),
    event.get(...arguments)
  ])
  return session && body ? { body: { ...body, session } } : { status: 404 }
}
