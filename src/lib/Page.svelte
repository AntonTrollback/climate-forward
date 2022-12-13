<script>
  import Slices from './Slices.svelte'
  import Menu from './Menu.svelte'
  import Footer from './Footer.svelte'
  export let page
  export let settings
</script>

<Menu
  prefix={settings}
  slices={page.data.menu}
  keeptop={page.data.keeptop}
  stacked={page.data.stacked}
  branding={page.data.branding || settings.data.branding} />

<Slices slices={page.data.body} />

<Footer
  prefix={settings}
  branding={page.data.branding || settings.data.branding}
  copyright={page.data.copyright || settings.data.copyright}
  links={page.data.links.length &&
  page.data.links.some(
    (item) =>
      item.text &&
      (item.link.link_type !== 'Web'
        ? item.link.id && !item.link.isBroken
        : true)
  )
    ? page.data.links
    : settings.data.links} />
