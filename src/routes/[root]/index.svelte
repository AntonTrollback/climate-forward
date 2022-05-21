<script context="module">
  import { createClient } from '@prismicio/client'
  import { pageBody } from '$lib/Slices.svelte'

  const graphQuery = `
    {
      page {
        ...pageFields
        body ${pageBody}
      }
    }
  `

  export async function load({ fetch, params }) {
    const client = createClient('climateforward', { fetch })
    const page = await client.getByUID('page', params.root, { graphQuery })
    return page ? { props: { page } } : { status: 404 }
  }
</script>

<script>
  import Menu from '$lib/Menu.svelte'
  import { setContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import Slices from '$lib/Slices.svelte'
  import Footer from '$lib/Footer.svelte'
  import resolve from '$lib/utils/resolve.js'

  setContext(LINK, function (props) {
    const { document, ...attrs } = props
    if (document) attrs.href = resolve(document, page)
    return attrs
  })

  export let page
</script>

<Menu
  branding={page.data.branding}
  keeptop={page.data.keeptop}
  stacked={page.data.stacked}
  slices={page.data.menu} />

<Slices slices={page.data.body} />

<Footer
  links={page.data.links}
  width={page.data.max_width}
  branding={page.data.branding}
  copyright={page.data.copyright} />
