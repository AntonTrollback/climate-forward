<script>
  import { asText } from '@prismicio/helpers'
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
  export let page
  export let parent
</script>

<Menu
  prefix={parent}
  slices={page.data.menu}
  keeptop={page.data.keeptop}
  branding={page.data.branding || parent.data.branding} />

<Slices slices={page.data.body} />

<Footer
  prefix={parent}
  width={page.data.max_width}
  branding={page.data.branding || parent.data.branding}
  copyright={page.data.copyright || parent.data.copyright}
  links={page.data.links.length ? page.data.links : parent.data.links} />
