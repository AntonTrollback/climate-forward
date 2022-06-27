<script context="module">
  import { graphQuery } from '$lib/Event.svelte'
  import { createClient } from '@prismicio/client'

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
