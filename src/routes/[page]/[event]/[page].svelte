<script>
  import Page from '$lib/Page.svelte'
  import Event from '$lib/Event.svelte'
  export let page
  export let event
</script>

<Event document={event}>
  <Page document={page} />
</Event>
