<script>
  import EventPage from '../../+page.svelte'
  export let data = {}
  const { session, ...props } = data
</script>

<EventPage data={props} {session} />
