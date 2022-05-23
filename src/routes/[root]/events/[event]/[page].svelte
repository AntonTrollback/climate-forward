<script context="module">
  import { createClient } from '@prismicio/client'
  import { pageBody, eventBody } from '$lib/Slices.svelte'

  const graphQuery = `
    {
      page {
        ...pageFields
        body ${pageBody}
      }
      event {
        ...eventFields
        parent {
          ...on page {
            ...pageFields
            body ${pageBody}
          }
        }
        body ${eventBody}
      }
    }
  `

  export async function load({ fetch, params }) {
    const client = createClient('climateforward', { fetch })
    const [root, event, page] = await Promise.all([
      client.getByUID('page', params.root, { graphQuery }),
      client.getByUID('event', params.event, { graphQuery }),
      client.getByUID('page', params.page, { graphQuery })
    ])
    const parent = event.data.parent || root
    return parent && event
      ? { props: { parent, event, page } }
      : { status: 404 }
  }
</script>

<script>
  import { setContext } from 'svelte'
  import Page from '$lib/Page.svelte'
  import Event from '$lib/Event.svelte'
  import { LINK } from '$lib/Link.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (document) {
    switch (document.type) {
      case 'event':
        return { href: resolve(document, parent) }
      case 'page':
        return { href: resolve(document, [parent, event]) }
      default:
        return { href: resolve(document) }
    }
  })

  export let parent
  export let event
  export let page
</script>

<Event {parent} {event}>
  <Page {page} {parent} />
</Event>
