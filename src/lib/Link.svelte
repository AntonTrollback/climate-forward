<script context="module">
  export const LINK = Symbol('LINK')
</script>

<script>
  import { getContext } from 'svelte'
  import resolve from '$lib/utils/resolve.js'

  $: props = getProps($$props)
  $: attributes = Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith('on:'))
  )
  $: events = Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith('on:'))
  )

  function getProps(props) {
    const resolver = getContext(LINK)
    if (resolver) return resolver(props)
    if (props.document) return { ...props, href: resolve(props.document) }
    return props
  }

  function addEventListener(node, events) {
    const listener = {
      handleEvent(event) {
        return events[`on:${event.type}`](event)
      }
    }

    for (const event of Object.keys(events)) {
      node.addEventListener(event.slice(3), listener)
    }

    return {
      update(newEvents) {
        events = newEvents
      },
      destroy() {
        for (const event of Object.keys(events)) {
          node.removeEventListener(event.slice(3), listener)
        }
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...attributes} use:addEventListener={events}><slot /></a>
