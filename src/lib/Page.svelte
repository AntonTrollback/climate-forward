<script>
  import Slices from './Slices.svelte'
  import Menu from './Menu.svelte'
  import Footer from './Footer.svelte'
  export let page
  export let parent = null
</script>

<Menu
  prefix={parent}
  slices={page.data.menu}
  keeptop={page.data.keeptop}
  stacked={page.data.stacked}
  branding={page.data.branding || parent.data.branding} />

<Slices slices={page.data.body} />

<Footer
  prefix={parent}
  branding={page.data.branding || parent.data.branding}
  copyright={page.data.copyright || parent.data.copyright}
  links={page.data.links.length &&
  page.data.links.some(
    (item) =>
      item.text &&
      (item.link.link_type !== 'Web'
        ? item.link.id && !item.link.isBroken
        : true)
  )
    ? page.data.links
    : parent.data.links} />
