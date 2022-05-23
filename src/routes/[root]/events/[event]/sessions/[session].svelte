<script context="module">
  import { createClient } from '@prismicio/client'
  import { graphQuery as sessionFields } from '$lib/Session.svelte'
  import { load as eventLoader } from '../index.svelte'
  import Meta from '$lib/Meta.svelte'

  const graphQuery = `
    {
      session ${sessionFields}
    }
  `

  export async function load({ fetch, params }) {
    const client = createClient('climateforward', { fetch })
    const [session, { props }] = await Promise.all([
      client.getByUID('session', params.session, { graphQuery }),
      eventLoader(...arguments)
    ])
    return session && props ? { props: { ...props, session } } : { status: 404 }
  }
</script>

<script>
  import EventPage from '../index.svelte'
  export let parent
  export let event
  export let session
</script>

<svelte:head>
  <Meta document={session} {event} />
</svelte:head>

<EventPage {parent} {event} {session} />
