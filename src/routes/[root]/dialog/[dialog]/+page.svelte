<script>
  import EventPage from '../../+page.svelte'
  export let data = {}
  const { dialog, ...props } = data
</script>

<EventPage data={props} {dialog} />
