import { error } from '@sveltejs/kit'
import { createClient } from '@prismicio/client'
import { load as eventLoader } from '../../+page.js'
import { session as sessionFields } from '$lib/utils/queries.js'

const graphQuery = `
  {
    session ${sessionFields}
  }
`

export async function load({ fetch, params }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [session, data] = await Promise.all([
      client.getByUID('session', params.session, { graphQuery }),
      eventLoader(...arguments)
    ])
    return { ...data, session }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
