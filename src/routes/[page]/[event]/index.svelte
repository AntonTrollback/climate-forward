<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import Event from '$lib/Event.svelte'
  import { gettext } from '$lib/i18n.js'
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
      const href = resolve(document, page)
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
        const href = resolve(document, [page, event, '/speakers'])
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
        const href = resolve(document, [page, event, '/sessions'])
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
      case 'page':
        return { ...attrs, href: resolve(document, [page, event]) }
      default:
        return { ...attrs, href: resolve(document) }
    }
  })

  export let page
  export let event
  export let speaker
  export let session
  export const text = gettext(translations)

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

<Event document={event} />
{#if speaker}
  <Modal>
    <Speaker {speaker} sessions={getSessionsForSpeaker()} />
    <Link slot="close" document={event}>
      {text`Close`}
    </Link>
  </Modal>
{/if}
{#if session}
  <Modal>
    <Session {session} />
    <Link slot="close" document={event}>
      {text`Close`}
    </Link>
  </Modal>
{/if}
