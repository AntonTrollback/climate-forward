<script context="module">
  import { writable } from 'svelte/store'

  export const current = writable()
</script>

<script>
  import Menu from './Menu.svelte'
  import Modal from './Modal.svelte'
  import Dialog from './Dialog.svelte'
  import Footer from './Footer.svelte'
  import Slices from './Slices.svelte'
  import SpeakerDetails from './SpeakerDetails.svelte'
  import SessionDetails from './SessionDetails.svelte'
  import Program from './Program.svelte'
  import { setMeta } from './Meta.svelte'
  import Previous from './Previous.svelte'
  import resolve from './utils/resolve.js'
  import Link, { LINK } from './Link.svelte'
  import { asDate } from '@prismicio/helpers'
  import { setContext, onMount } from 'svelte'
  import { createClient } from '@prismicio/client'
  import { event as eventQuery } from './utils/queries.js'

  export let settings
  export let event
  export let speaker = null
  export let session = null
  export let dialog = null

  current.set(event)

  onMount(async function () {
    if (session) {
      document.getElementById('program')?.scrollIntoView()
    } else if (speaker) {
      document.getElementById('speakers')?.scrollIntoView()
    }

    let timeout
    ;(function ontick() {
      const sessions = event.data.sessions
        .map((item) => item.session)
        .filter((session) => session.id && !session.isBroken)
        .sort(
          (a, b) =>
            asDate(a.data.start_date_time) - asDate(b.data.start_date_time)
        )
      const next = sessions.find(
        (session) => asDate(session.data.start_date_time) > Date.now()
      )
      const live = sessions.find(
        (session) =>
          asDate(session.data.start_date_time) < Date.now() &&
          asDate(session.data.end_date_time) > Date.now()
      )

      if (next || live) {
        timeout = setTimeout(function () {
          update()
          ontick()
        }, Math.min(
          next ? asDate(next.data.start_date_time) - Date.now() : Infinity,
          live ? asDate(live.data.end_date_time) - Date.now() : Infinity,
          1000 * 60
        ))
      }
    })()

    function onvisibilitychange() {
      if (!document.hidden) update()
    }

    async function update() {
      const client = createClient('climateforward', { fetch: window.fetch })
      event = await client.getByID(event.id, {
        graphQuery: `
          {
            event ${eventQuery}
          }
        `
      })
      current.set(event)
    }

    window.addEventListener('visibilitychange', onvisibilitychange)

    return function () {
      window.removeEventListener('visibilitychange', onvisibilitychange)
      clearTimeout(timeout)
    }
  })

  setContext(LINK, function (document) {
    if (document === event) {
      const href = resolve(document)
      return {
        href: href,
        'data-sveltekit-reload': '',
        onclick(e) {
          speaker = null
          session = null
          dialog = null
          setMeta(document)
          window.history.replaceState({}, null, href)
          e.preventDefault()
        }
      }
    }

    switch (document.type) {
      case 'speaker': {
        const href = resolve(document, [event, '/speakers'])
        return {
          href: href,
          'data-sveltekit-reload': '',
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
        const href = resolve(document, [event, '/sessions'])
        return {
          href: href,
          'data-sveltekit-reload': '',
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
      case 'page': {
        return { href: resolve(document, event) }
      }
      case 'event':
        return { href: resolve(document) }
      default:
        return { href: resolve(document) }
    }
  })

  function handlekey(event) {
    if (event.key === 'Escape' && (speaker || session || dialog)) onclose()
  }

  function onclose() {
    speaker = null
    session = null
    dialog = null
    setMeta(event)
    window.history.replaceState({}, null, resolve(event))
  }
</script>

<svelte:window on:keydown={handlekey} />

<slot>
  <Slices slices={$current.data.body}>
    <Program
      slot="program"
      sessions={$current.data.sessions
        .map((item) => item.session)
        .filter((session) => session.id && !session.isBroken)} />
    <Previous
      slot="previous_sessions"
      sessions={$current.data.sessions
        .map((item) => item.session)
        .filter((session) => session.id && !session.isBroken)} />
  </Slices>
</slot>

{#if speaker}
  <Modal>
    <SpeakerDetails
      {speaker}
      on:close={onclose}
      sessions={$current.data.sessions
        .map((item) => item.session)
        .filter(
          (session) =>
            session.id &&
            !session.isBroken &&
            session.data.speakers.some((item) => item.speaker.id === speaker.id)
        )} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}

{#if session}
  <Modal>
    <SessionDetails {session} {event} on:close={onclose} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}

{#if dialog}
  <Modal iframing={dialog.data.iframe_url}>
    <Dialog {dialog} on:close={onclose} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}
