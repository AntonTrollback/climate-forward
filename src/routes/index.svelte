<script context="module">
  import { createClient } from '@prismicio/client'
  import { pageBody } from '$lib/Slices.svelte'
  import Meta from '$lib/Meta.svelte'

  const graphQuery = `
    {
      page {
        ...pageFields
        body ${pageBody}
      }
    }
  `

  export async function load({ fetch }) {
    try {
      const client = createClient('climateforward', { fetch })
      const page = await client.getByUID('page', 'homepage', { graphQuery })
      return { props: { page } }
    } catch (err) {
      console.error(err)
      return { status: 400 }
    }
  }
</script>

<script>
  import Page from '$lib/Page.svelte'
  export let page
</script>

<svelte:head>
  <Meta source={page} />
</svelte:head>

<Page {page} />
