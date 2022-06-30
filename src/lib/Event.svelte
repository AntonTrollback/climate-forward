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
  import Speaker from './Speaker.svelte'
  import Program from './Program.svelte'
  import Session from './Session.svelte'
  import { setMeta } from './Meta.svelte'
  import Previous from './Previous.svelte'
  import resolve from './utils/resolve.js'
  import Link, { LINK } from './Link.svelte'
  import { asDate } from '@prismicio/helpers'
  import { setContext, onMount } from 'svelte'
  import { createClient } from '@prismicio/client'
  import { event as eventQuery } from './utils/queries.js'

  export let parent
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
        (session) =>
          asDate(session.data.start_date_time) - 1000 * 60 * 60 > Date.now()
      )
      const live = sessions.find(
        (session) =>
          asDate(session.data.start_date_time) - 1000 * 60 * 60 < Date.now() &&
          asDate(session.data.end_date_time) - 1000 * 60 * 60 > Date.now()
      )

      if (next || live) {
        timeout = setTimeout(function () {
          update()
          ontick()
        }, Math.min(
          next
            ? asDate(next.data.start_date_time) - 1000 * 60 * 60 - Date.now()
            : Infinity,
          live
            ? asDate(live.data.end_date_time) - 1000 * 60 * 60 - Date.now()
            : Infinity,
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

  function onclose() {
    speaker = null
    session = null
    dialog = null
    setMeta(event, parent)
    window.history.replaceState({}, null, resolve(event, parent))
  }
</script>

<slot>
  <Menu
    slices={$current.data.menu}
    keeptop={$current.data.keeptop}
    stacked={$current.data.stacked}
    button={{ link: $current.data.link, text: $current.data.button_text }}
    branding={$current.data.branding || parent.data.branding} />

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
    <Speaker
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
    <Session {session} {event} on:close={onclose} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}

{#if dialog}
  <Modal>
    <Dialog {dialog} on:close={onclose} />
    <Link slot="close" document={event}>Close</Link>
  </Modal>
{/if}
