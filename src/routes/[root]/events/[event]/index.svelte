<script context="module">
  import { createClient } from '@prismicio/client'
  import { eventBody, pageBody } from '$lib/Slices.svelte'

  const graphQuery = `
    {
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
      page {
        ...pageFields
        body ${pageBody}
      }
    }
  `

  export async function load({ fetch, params }) {
    const client = createClient('climateforward', { fetch })
    const [root, event] = await Promise.all([
      client.getByUID('page', params.root, { graphQuery }),
      client.getByUID('event', params.event, { graphQuery })
    ])
    const parent = event.data.parent || root
    return parent && event ? { props: { parent, event } } : { status: 404 }
  }
</script>

<script>
  import Event from '$lib/Event.svelte'
  export let parent
  export let event
</script>

<Event {parent} {event} />
