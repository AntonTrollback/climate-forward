import { error } from '@sveltejs/kit'
import { createClient, predicate } from '@prismicio/client'
import { page as pageQuery } from '$lib/utils/queries.js'

export async function load({ fetch, params }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [settings, page] = await Promise.all([
      client.getSingle('settings'),
      client.getByUID('page', params.page, {
        graphQuery: `
          {
            page ${pageQuery}
          }
        `
      }),
    ])

    return { page, settings }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
