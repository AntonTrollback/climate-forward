<script>
  import Page from '$lib/Page.svelte'
  import Event from '$lib/Event.svelte'
  export let page
  export let event
  export let content
</script>

<Event document={event}>
  <Page document={content} />
</Event>
