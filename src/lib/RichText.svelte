<script>
    import { getContext } from 'svelte'
    import { LINK } from '$lib/Link.svelte'
    import { asHTML } from '@prismicio/helpers'
    import resolve from '$lib/utils/resolve.js'

    export let fields

    function resolveLink (document) {
      const resolver = getContext(LINK)
      if (resolver) return resolver({ document }).href
      return resolve(document)
    }
</script>

{@html asHTML(fields, resolveLink)}
