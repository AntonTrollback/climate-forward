<script>
  import Slices from '$lib/Slices.svelte'
  import Menu from '$lib/Menu.svelte'
  import Footer from '$lib/Footer.svelte'
  export let page
  export let parent = null
</script>

<Menu
  prefix={parent}
  slices={page.data.menu}
  keeptop={page.data.keeptop}
  adaptive={page.data.adaptive}
  stacked={page.data.stacked}
  branding={page.data.branding || parent.data.branding} />

<Slices slices={page.data.body} />

<Footer
  prefix={parent}
  branding={page.data.branding || parent.data.branding}
  copyright={page.data.copyright || parent.data.copyright}
  links={page.data.links.length ? page.data.links : parent.data.links} />
