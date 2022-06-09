<script>
  import Menu from './Menu.svelte'
  import Modal from './Modal.svelte'
  import Footer from './Footer.svelte'
  import Slices from './Slices.svelte'
  import Speaker from './Speaker.svelte'
  import Session from './Session.svelte'
  import Dialog from './Dialog.svelte'
  import { setMeta } from './Meta.svelte'
  import resolve from './utils/resolve.js'
  import Link, { LINK } from './Link.svelte'
  import { setContext, onMount } from 'svelte'

  export let parent
  export let event
  export let speaker = null
  export let session = null
  export let dialog = null

  onMount(function () {
    if (session) {
      document.getElementById('program')?.scrollIntoView()
    } else if (speaker) {
      document.getElementById('speakers')?.scrollIntoView()
    }
  })

  setContext(LINK, function (document) {
    if (document === event) {
      const href = resolve(document, parent)
      return {
        href: href,
        'sveltekit:reload': '',
        onclick(e) {
          speaker = null
          session = null
          dialog = null
          setMeta(document, parent)
          window.history.replaceState({}, null, href)
          e.preventDefault()
        }
      }
    }

    switch (document.type) {
      case 'speaker': {
        const href = resolve(document, [parent, event, '/speakers'])
        return {
          href: href,
          'sveltekit:reload': '',
          onclick(e) {
            dialog = null
            session = null
            speaker = document
            setMeta(speaker, event)
            window.history.replaceState({}, null, href)
            e.preventDefault()
          }
        }
      }
      case 'session': {
        const href = resolve(document, [parent, event, '/sessions'])
        return {
          href: href,
          'sveltekit:reload': '',
          onclick(e) {
            dialog = null
            speaker = null
            session = document
            setMeta(session, event)
            window.history.replaceState({}, null, href)
            e.preventDefault()
          }
        }
      }
      case 'dialog': {
        const href = resolve(document, [parent, event, '/dialog'])
        return {
          href: href,
          'sveltekit:reload': '',
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
      case 'page': {
        const prefix =
          document.id === parent.id ? null : parent ? [parent, event] : event
        return { href: resolve(document, prefix) }
      }
      case 'event':
        return { href: resolve(document, parent) }
      default:
        return { href: resolve(document) }
    }
  })

  function getSessionsForSpeaker() {
    return event.data.body
      .filter((slice) => slice.slice_type === 'program')
      .flatMap((slice) =>
        slice.items
          .map((item) => item.session)
          .filter((session) =>
            session.data.speakers.some((item) => item.speaker.id === speaker.id)
          )
      )
  }
</script>

<slot>
  <Menu
    slices={event.data.menu}
    keeptop={event.data.keeptop}
    stacked={event.data.stacked}
    button={{ link: event.data.link, text: event.data.button_text }}
    branding={event.data.branding || parent.data.branding} />

  <Slices slices={event.data.body} />

  {#if parent}
    <Footer
      prefix={parent}
      links={parent.data.links}
      branding={parent.data.branding}
      copyright={parent.data.copyright} />
  {/if}
</slot>

{#if speaker}
  <Modal>
    <Speaker {speaker} sessions={getSessionsForSpeaker()} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}

{#if session}
  <Modal>
    <Session {session} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}

{#if dialog}
  <Modal>
    <Dialog {dialog} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}
