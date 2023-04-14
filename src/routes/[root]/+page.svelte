<script>
  import Meta from '$lib/Meta.svelte'
  import Menu from '$lib/Menu.svelte'
  import Event from '$lib/Event.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import Slices from '$lib/Slices.svelte'
  import Footer from '$lib/Footer.svelte'
  import { setMeta } from '$lib/Meta.svelte'
  import resolve from '$lib/utils/resolve.js'

  export let data = {}
  export let dialog = null
  export let speaker = null
  export let session = null

  const { page, event, settings } = data

  const current = page || event

  const links = []
    .concat(page?.data.links?.map(linkFrom(page)))
    .concat(event?.data.links?.map(linkFrom(event)))
    .concat(settings.data.links.map(linkFrom()))
    .filter(Boolean)

  setContext(LINK, function (document) {
    switch (document.type) {
      case 'dialog': {
        const href = resolve(document, [event, '/dialog'])
        return {
          href: href,
          'data-sveltekit-reload': '',
          onclick(e) {
            speaker = null
            session = null
            dialog = document
            setMeta(dialog, event)
            window.history.replaceState({}, null, href)
            e.preventDefault()
          }
        }
      }
      default:
        return { href: resolve(document, prefix) }
    }
  })

  function linkFrom(parent) {
    return function (item) {
      return item.text &&
        (item.link.link_type === 'Web' || (item.link.id && !item.link.isBroken))
        ? {
            href: resolve(item.link, parent),
            text: item.text
          }
        : null
    }
  }
</script>

<svelte:head>
  <Meta page={current} {settings} />
</svelte:head>

<Menu
  branding={current.data.branding}
  keeptop={current.data.keeptop}
  stacked={current.data.stacked}
  slices={current.data.menu}
  button={current.data.button_text
    ? { link: current.data.link, text: current.data.button_text }
    : null} />

{#if event}
  <Event {settings} {event} {dialog} {session} {speaker} />
{:else if page}
  <Slices slices={page.data.body} />
{/if}

<Footer
  {links}
  branding={current.data.branding}
  copyright={settings.data.copyright} />
