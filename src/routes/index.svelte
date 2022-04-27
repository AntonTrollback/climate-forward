<script>
  import Page from '$lib/Page.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (props) {
    const { document, ...attrs } = props

    if (!document) return attrs

    switch (document.type) {
      case 'event': {
        const href = resolve(document, page)
        return { ...attrs, href: href }
      }
      default:
        return { ...attrs, href: resolve(document) }
    }
  })

  export let page
</script>

<Page document={page} />
