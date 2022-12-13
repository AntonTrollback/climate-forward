import { error } from '@sveltejs/kit'
import { createClient } from '@prismicio/client'
import { page as pageQuery } from '$lib/utils/queries.js'

const graphQuery = `
    {
      page ${pageQuery}
    }
  `

export async function load({ fetch }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [settings, page] = await Promise.all([
      client.getSingle('settings'),
      client.getByUID('page', 'climate-forward', { graphQuery })
    ])

    return { page, settings }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
