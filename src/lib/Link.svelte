<script context="module">
  export const LINK = Symbol('LINK')
</script>

<script>
  import { getContext } from 'svelte'
  import resolve from './utils/resolve.js'

  $: props = getProps($$props)
  $: attributes = Object.fromEntries(
    Object.entries(props)
      .filter(([key]) => !key.startsWith('on'))
      .concat(
        [
          props.href?.startsWith('/') ? ['sveltekit:prefetch', ''] : null
        ].filter(Boolean)
      )
  )
  $: events = Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith('on'))
  )

  function getProps(props) {
    const resolver = getContext(LINK)
    if (props.document?.target === '_blank') {
      props = {
        ...props,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }
    if (resolver) return resolver(props)
    if (props.document) {
      return { ...props, document: null, href: resolve(props.document) }
    }
    return props
  }

  function addEventListener(node, events) {
    const listener = {
      handleEvent(event) {
        return events[`on${event.type}`](event)
      }
    }

    for (const event of Object.keys(events)) {
      node.addEventListener(event.slice(2), listener)
    }

    return {
      update(newEvents) {
        events = newEvents
      },
      destroy() {
        for (const event of Object.keys(events)) {
          node.removeEventListener(event.slice(2), listener)
        }
      }
    }
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if 'href' in attributes}
  <a {...attributes} use:addEventListener={events}><slot /></a>
{:else}
  <button {...attributes} use:addEventListener={events}><slot /></button>
{/if}
