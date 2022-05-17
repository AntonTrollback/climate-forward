<script>
  import Page from '$lib/Page.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import resolve from '$lib/utils/resolve.js'
  export let page
</script>

<Page document={page} />
