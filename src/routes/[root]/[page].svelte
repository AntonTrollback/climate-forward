<script context="module">
  import { page as pageQuery } from '$lib/utils/queries.js'
  import { createClient } from '@prismicio/client'
  import Meta from '$lib/Meta.svelte'

  const graphQuery = `
    {
      page ${pageQuery}
    }
  `

  const redirects = {
    'climate-forward/london': '/climate-forward/events/london',
    'climateforward/london': '/climate-forward/events/london',
    'a-new-climate/san-francisco': '/a-new-climate/events/san-francisco',
    'anewclimate/san-francisco': '/a-new-climate/events/san-francisco',
    'anewclimate/sanfrancisco': '/a-new-climate/events/san-francisco',
    'climate-forward/new-york': '/climate-forward/events/new-york',
    'climate-forward/newyork': '/climate-forward/events/new-york'
  }

  export async function load({ fetch, params }) {
    const path = [params.root, params.page].join('/')
    if (path in redirects) {
      return { redirect: redirects[path], status: 301 }
    }
    try {
      const client = createClient('climateforward', { fetch })
      const [parent, page] = await Promise.all([
        client.getByUID('page', params.root, { graphQuery }),
        client.getByUID('page', params.page, { graphQuery })
      ])
      return { props: { parent, page } }
    } catch (err) {
      console.error(err)
      return { status: 400 }
    }
  }
</script>

<script>
  import Page from '$lib/Page.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (document) {
    switch (document.type) {
      case 'page':
      case 'event':
        const prefix = document.id === parent.id ? null : parent
        return { href: resolve(document, prefix) }
      default:
        return { href: resolve(document) }
    }
  })

  export let page
  export let parent
</script>

<svelte:head>
  <Meta source={page} {parent} />
</svelte:head>

<Page {page} {parent} />
