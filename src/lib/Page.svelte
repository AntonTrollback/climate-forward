<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  export let document
</script>

<Menu slices={document.data.menu} />
<h1 class="u-container u-title">{asText(document.data.title)}</h1>
<Slices slices={document.data.body} />
