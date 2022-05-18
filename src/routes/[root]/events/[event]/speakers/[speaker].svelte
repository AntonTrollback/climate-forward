<script context="module">
  import { createClient } from '@prismicio/client'
  import { load as eventLoader } from '../index.svelte'

  export async function load({ fetch, params }) {
    const client = createClient('climateforward', { fetch })
    const [speaker, { props }] = await Promise.all([
      client.getByUID('speaker', params.speaker),
      eventLoader(...arguments)
    ])
    return speaker && props ? { props: { ...props, speaker } } : { status: 404 }
  }
</script>

<script>
  import Event from '$lib/Event.svelte'
  export let parent
  export let event
  export let speaker
</script>

<Event {parent} {event} {speaker} />
