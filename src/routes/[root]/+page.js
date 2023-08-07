import { error } from '@sveltejs/kit'
import { createClient, predicate } from '@prismicio/client'
import { page as pageQuery, event as eventQuery } from '$lib/utils/queries.js'

export async function load({ fetch, params }) {
  try {
    const client = createClient('climateforward', { fetch })
    const [allSpeakers, settings, ...responses] = await Promise.all([
      client.getAllByType('speaker'),
      client.getSingle('settings'),
      client.get({
        predicates: [predicate.at('my.event.uid', params.root)],
        graphQuery: `
          {
            event ${eventQuery}
          }
        `
      }),
      client.get({
        predicates: [predicate.at('my.page.uid', params.root)],
        graphQuery: `
          {
            page ${pageQuery}
          }
        `
      })
    ])

    const [first] = responses
      .flatMap((response) => response.results)
      .filter((result) => result.uid === params.root)

    if (!first) throw new Error('Not found')
    return { [first.type]: first, settings, allSpeakers }
  } catch (err) {
    throw error(404, 'Not found')
  }
}
