<script>
  import { asText } from '@prismicio/helpers'
  import { page } from '$app/stores'
  export let document
  export let parent

  function getTitle(doc) {
    if (doc.data.seo_title) return doc.data.seo_title
    if (doc.data.title) return asText(doc.data.title)
    if (doc.data.name) return asText(doc.data.name)
    return ''
  }

  function getImage(doc) {
    if (doc.data.seo_image?.url) return doc.data.seo_image
    if (doc.data.branding)
      return {
        url: `${$page.url.origin}/share-${document.data.branding
          .toLowerCase()
          .replaceAll(' ', '-')}.png`,
        dimensions: {
          width: 1600,
          height: 800
        }
      }
    return null
  }

  let title = getTitle(document)
  if (parent) title = `${title} | ${getTitle(parent)}`

  let image = getImage(document)
  if (parent && !image) image = getImage(parent)
</script>

<title>{title}</title>
<meta property="og:title" content={title} />
{#if document.data.seo_description}
  <meta name="description" content={document.data.seo_description} />
{/if}
{#if image}
  <meta property="og:image" content={image.url} />
  <meta property="og:image:width" content={image.dimensions.width} />
  <meta property="og:image:height" content={image.dimensions.height} />
{/if}
