<script context="module">
  import { createClient } from '@prismicio/client'
  import { eventBody, pageBody } from '$lib/Slices.svelte'
  import Meta from '$lib/Meta.svelte'

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
  export let session = null
  export let speaker = null
</script>

<svelte:head>
  <Meta source={event} {parent} />
</svelte:head>

<Event {parent} {event} {session} {speaker} />
