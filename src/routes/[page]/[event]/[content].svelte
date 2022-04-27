<script>
  import { setContext } from 'svelte'
  import Page from '$lib/Page.svelte'
  import Event from '$lib/Event.svelte'
  import { LINK } from '$lib/Link.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (props) {
    const { document, ...attrs } = props

    if (!document) return attrs

    switch (document.type) {
      case 'event':
        return { ...attrs, href: resolve(document, page) }
      case 'page':
        return { ...attrs, href: resolve(document, [page, event]) }
      default:
        return { ...attrs, href: resolve(document) }
    }
  })

  export let page
  export let event
  export let content
</script>

<Event document={event}>
  <Page document={content} />
</Event>
