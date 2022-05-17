<script>
  import { getContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import { asHTML } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'

  export let fields
  export let size

  size =
    size === 'sm'
      ? 'Text--sm'
      : size === 'lg'
      ? 'Text--lg'
      : size === 'xl'
      ? 'Text--xl'
      : ''

  function resolveLink(document) {
    const resolver = getContext(LINK)
    if (resolver) return resolver({ document }).href
    return resolve(document)
  }
</script>

<div class="Text {size}">{@html asHTML(fields, resolveLink)}</div>
