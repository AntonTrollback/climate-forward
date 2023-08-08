<script context="module">
  import { getContext } from 'svelte'
  import resolve from './utils/resolve.js'

  export const LINK = Symbol('LINK')

  export function linkResolver(document) {
    if (!document) return null

    const resolver = getContext(LINK)
    const props = {}

    if (document.target === '_blank') {
      Object.assign(props, {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }

    Object.assign(
      props,
      resolver ? resolver(document) : { href: resolve(document) }
    )

    if (props.href?.startsWith('/') && !props.target === '_blank') {
      props['sveltekit:prefetch'] = ''
    }

    return props
  }
</script>

<script>
  export let onclick = null
  export let document = null

  $: props = linkResolver(document)
  $: _onclick = props?.onclick || onclick
  $: attrs = Object.fromEntries(
    Object.entries({
      ...$$restProps,
      ...props
    }).filter(([key]) => key !== 'onclick')
  )
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...attrs} on:click={_onclick}><slot /></a>
