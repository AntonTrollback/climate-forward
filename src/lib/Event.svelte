<script context="module">
  export const graphQuery = `
    {
      ...eventFields
    }
  `
</script>

<script>
  import { asText } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
  export let document
</script>

<Menu slices={document.data.menu} />
<slot>
  <Slices slices={document.data.body} />
</slot>
<Footer
  links={document.data.links}
  copyright={document.data.copyright}
  width={document.data.max_width}/>
