<script>
  import { asText } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  export let document
</script>

<slot>
  <Menu slices={document.data.menu} />
  <h1 class="u-container u-title">{asText(document.data.name)}</h1>
  <Slices slices={document.data.body} />
</slot>
