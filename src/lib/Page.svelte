<script>
  import { setContext } from 'svelte'
  import { setMeta } from './Meta.svelte'
  import Slices from './Slices.svelte'
  import Menu from './Menu.svelte'
  import Link from './Link.svelte'
  import Speaker from './Speaker.svelte'
  import Footer from './Footer.svelte'
  import Modal from './Modal.svelte'
  import { LINK } from './Link.svelte'
  import resolve from './utils/resolve.js'
  export let page
  export let parent = null
  export let speaker = null

  setContext(LINK, function (document) {
    if (document === page) {
      const href = resolve(document, parent)
      return {
        href: href,
        'sveltekit:reload': '',
        onclick(e) {
          speaker = null
          setMeta(document, parent)
          window.history.replaceState({}, null, href)
          e.preventDefault()
        }
      }
    }

    switch (document.type) {
      case 'speaker': {
        const href = resolve(document, [parent, page, '/speakers'])
        return {
          href: href,
          'sveltekit:reload': '',
          onclick(e) {
            speaker = document
            setMeta(speaker, page)
            e.preventDefault()
          }
        }
      }
      default:
        return { href: resolve(document) }
    }
  })
</script>

<Menu
  prefix={parent}
  slices={page.data.menu}
  keeptop={page.data.keeptop}
  adaptive={page.data.adaptive}
  stacked={page.data.stacked}
  branding={page.data.branding || parent.data.branding} />

<Slices slices={page.data.body} />

{#if speaker}
  <Modal>
    <Speaker {speaker} />
    <Link slot="close" document={page}>Close</Link>
  </Modal>
{/if}

<Footer
  prefix={parent}
  branding={page.data.branding || parent.data.branding}
  copyright={page.data.copyright || parent.data.copyright}
  links={page.data.links.length ? page.data.links : parent.data.links} />
