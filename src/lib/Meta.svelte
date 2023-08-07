<script context="module">
  import { asText } from '@prismicio/helpers'

  export const setMeta = function (doc, settings) {
    let { title, desc, image } = define(doc, settings)

    function set(query, content) {
      let el = document.head.querySelector(query)
      if (el) el.setAttribute('content', content)
    }

    if (title) {
      document.title = title
      set('[property="og:title"]', title)
    }
    if (desc) {
      set('[name="description"]', desc)
    }
    if (image) {
      set('[property="og:image"]', image.url)
      set('[property="og:width"]', image.dimensions.width)
      set('[property="og:height"]', image.dimensions.height)
    }
  }

  function define(doc, settings) {
    let title = getTitle(doc)
    if (
      doc.type === 'speaker' ||
      doc.type === 'session' ||
      doc.type === 'dialog'
    ) {
      title = `${title} | ${getTitle(settings)}`
    } else if (settings && !doc.data.seo_title) {
      title = `${title} | ${getTitle(settings)}`
    }

    let desc = doc.data.seo_description
    if (!desc && doc.type === 'speaker') desc = asText(doc.data.bio)
    if (!desc && doc.type === 'session') desc = asText(doc.data.description)
    if (!desc) desc = ''

    let image = getImage(doc)
    if (settings && !image) image = getImage(settings)

    // let noindex = doc.data.noindex || settings?.data.noindex
    let noindex = true

    return { title, desc, image, noindex }
  }

  function getTitle(doc) {
    if (doc.data.seo_title) return doc.data.seo_title
    if (doc.data.name) return asText(doc.data.name)
    if (doc.data.title) return asText(doc.data.title)

    return ''
  }

  function getImage(doc) {
    if (doc.data.seo_image?.url) return doc.data.seo_image
    if (doc.data.branding?.length) {
      let brand = doc.data.branding.toLowerCase().replaceAll(' ', '-')
      return {
        url: `https://climate-events.nytimes.com/share-${brand}.png`,
        dimensions: { width: 1600, height: 800 }
      }
    }
    return null
  }
</script>

<script>
  import { onMount } from 'svelte'
  export let page
  export let settings
  let { title, desc, image, noindex } = define(page, settings)

  onMount(() => {
    // svelte:head appends rather then updating existing
    function remove(query) {
      let items = document.head.querySelectorAll(query)
      if (!items) return
      items = Array.from(items)
      items.pop()
      items.forEach((el) => el.remove())
    }
    remove('title')
    remove('[property="og:title"]')
    remove('[name="description"]')
    remove('[property="og:image"]')
    remove('[property="og:image:width"]')
    remove('[property="og:image:height"]')
  })
</script>

<title>{title}</title>
<meta property="og:title" content={title} />
<meta name="description" content={desc} />
{#if noindex}
  <meta name="robots" content="noindex" />
{/if}
{#if image}
  <meta property="og:image" content={image.url} />
  <meta property="og:image:width" content={image.dimensions.width} />
  <meta property="og:image:height" content={image.dimensions.height} />
{/if}
