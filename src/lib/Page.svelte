<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  export let document
</script>

<h1 class="u-title">{asText(document.data.title)}</h1>
<Menu slices={document.data.menu} />
<Slices slices={document.data.body} />
