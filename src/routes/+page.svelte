<script>
  import Meta from '$lib/Meta.svelte'
  import Menu from '$lib/Menu.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import Slices from '$lib/Slices.svelte'
  import Footer from '$lib/Footer.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (document) {
    return { href: resolve(document, data) }
  })

  export let data = {}

  const { page, settings } = data

  const links = page.data.links
    .map(asLink)
    .concat(settings.data.links?.map(asLink))
    .filter(Boolean)

  function asLink(item) {
    return item.text &&
      (item.link.link_type === 'Web' || (item.link.id && !item.link.isBroken))
      ? {
          href: resolve(item.link),
          text: item.text
        }
      : null
  }
</script>

<svelte:head>
  <Meta {page} {settings} />
</svelte:head>

<Menu
  branding={page.data.branding}
  keeptop={page.data.keeptop}
  stacked={page.data.stacked}
  slices={page.data.menu}
  button={page.data.button_text
    ? { link: page.data.link, text: page.data.button_text }
    : null} />

<Slices slices={page.data.body} />

<Footer
  {links}
  branding={page.data.branding}
  copyright={settings.data.copyright} />
