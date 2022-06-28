<script context="module">
  import { createClient } from '@prismicio/client'
  import { load as eventLoader } from '../index.svelte'
  import { session as sessionQuery } from '$lib/utils/queries.js'
  import Meta from '$lib/Meta.svelte'

  const graphQuery = `
    {
      session ${sessionQuery}
    }
  `

  export async function load({ fetch, params }) {
    try {
      const client = createClient('climateforward', { fetch })
      const [session, { props }] = await Promise.all([
        client.getByUID('session', params.session, { graphQuery }),
        eventLoader(...arguments)
      ])
      return { props: { ...props, session } }
    } catch (err) {
      console.error(err)
      return { status: 400 }
    }
  }
</script>

<script>
  import EventPage from '../index.svelte'
  export let parent
  export let event
  export let session
</script>

<svelte:head>
  <Meta source={session} parent={event} />
</svelte:head>

<EventPage {parent} {event} {session} />
