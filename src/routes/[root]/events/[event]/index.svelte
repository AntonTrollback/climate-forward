<script context="module">
  import { createClient } from '@prismicio/client'
  import { page as pageQuery, event as eventQuery } from '$lib/utils/queries.js'

  const graphQuery = `
    {
      page ${pageQuery}
      event ${eventQuery}
    }
  `

  export async function load({ fetch, params }) {
    try {
      const client = createClient('climateforward', { fetch })
      const [root, event] = await Promise.all([
        client.getByUID('page', params.root, { graphQuery }),
        client.getByUID('event', params.event, { graphQuery })
      ])
      const parent = event.data.parent || root
      return { props: { parent, event } }
    } catch (err) {
      console.error(err)
      return { status: 400 }
    }
  }
</script>

<script>
  import Event from '$lib/Event.svelte'
  import Meta from '$lib/Meta.svelte'
  export let parent
  export let event
  export let session = null
  export let speaker = null
  export let dialog = null
</script>

<svelte:head>
  <Meta source={event} {parent} />
</svelte:head>

<Event {parent} {event} {session} {speaker} {dialog} />
