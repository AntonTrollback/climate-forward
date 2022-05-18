<script>
  import Menu from '$lib/Menu.svelte'
  import Event from '$lib/Event.svelte'
  import Footer from '$lib/Footer.svelte'
  import Slices from '$lib/Slices.svelte'
  import Speaker from '$lib/Speaker.svelte'
  import Session from '$lib/Session.svelte'
  import resolve from '$lib/utils/resolve.js'
  import Link, { LINK } from '$lib/Link.svelte'
  import { setContext, getContext } from 'svelte'
  import Modal, { MODAL } from '$lib/Modal.svelte'

  setContext(LINK, function (props) {
    const { document, ...attrs } = props

    if (!document) return attrs

    if (document === event) {
      const href = resolve(document, parent)
      return {
        ...attrs,
        href: href,
        'sveltekit:reload': '',
        'on:click': function (event) {
          speaker = null
          session = null
          window.history.replaceState({}, null, href)
          event.preventDefault()
        }
      }
    }

    switch (document.type) {
      case 'speaker': {
        const href = resolve(document, [parent, event, '/speakers'])
        return {
          ...attrs,
          href: href,
          'sveltekit:reload': '',
          'on:click': function (event) {
            session = null
            speaker = document
            window.history.replaceState({}, null, href)
            event.preventDefault()
          }
        }
      }
      case 'session': {
        const href = resolve(document, [parent, event, '/sessions'])
        return {
          ...attrs,
          href: href,
          'sveltekit:reload': '',
          'on:click': function (event) {
            speaker = null
            session = document
            window.history.replaceState({}, null, href)
            event.preventDefault()
          }
        }
      }
      case 'page': {
        const prefix =
          document.id === parent.id ? null : parent ? [parent, event] : event
        return { ...attrs, href: resolve(document, prefix) }
      }
      case 'event':
        return { ...attrs, href: resolve(document, parent) }
      default:
        return { ...attrs, href: resolve(document) }
    }
  })

  export let parent
  export let event
  export let speaker
  export let session

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
    branding={event.data.branding || parent.data.branding} />

  <Slices slices={event.data.body} />

  {#if parent}
    <Footer
      prefix={parent}
      links={parent.data.links}
      width={parent.data.max_width}
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
