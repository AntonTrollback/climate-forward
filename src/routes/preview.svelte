<script>
  import { createClient } from '@prismicio/client'
  import resolve from '$lib/utils/resolve.js'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(async () => {
    const client = createClient('climateforward', { fetch: window.fetch })
    const redirect = await client.resolvePreviewURL({
      defaultURL: '/',
      linkResolver: resolve
    })
    await goto(redirect)
  })
</script>

<svelte:head>
  <script
    async
    defer
    src="https://static.cdn.prismic.io/prismic.js?new=true&repo=climateforward"></script>
</svelte:head>
