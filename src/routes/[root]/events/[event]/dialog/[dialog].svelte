<script context="module">
  import { createClient } from '@prismicio/client'
  import { load as eventLoader } from '../index.svelte'
  import Meta from '$lib/Meta.svelte'

  export async function load({ fetch, params }) {
    try {
      const client = createClient('climateforward', { fetch })
      const [dialog, { props }] = await Promise.all([
        client.getByUID('dialog', params.dialog),
        eventLoader(...arguments)
      ])
      return { props: { ...props, dialog } }
    } catch (err) {
      console.error(err)
      return { status: 400 }
    }
  }
</script>

<script>
  import Event from '$lib/Event.svelte'
  export let parent
  export let event
  export let dialog
</script>

<svelte:head>
  <Meta source={dialog} parent={event} />
</svelte:head>

<Event {parent} {event} {dialog} />
