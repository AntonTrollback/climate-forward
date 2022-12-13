<script>
  import EventPage from '../../+page.svelte'
  export let data = {}
  const { speaker, ...props } = data
</script>

<EventPage data={props} {speaker} />
