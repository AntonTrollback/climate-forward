<script>
  import { asText } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
  export let document
</script>

<slot>
  <Menu branding={document.data.branding} slices={document.data.menu} />
  <Slices slices={document.data.body} />
  <Footer
    branding={document.data.branding}
    links={document.data.links}
    copyright={document.data.copyright}
    width={document.data.max_width}/>
</slot>
