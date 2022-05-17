<script context="module">
  export const graphQuery = `
    {
      ...sponsorFields
    }
  `
</script>

<script>
  import { asText } from '@prismicio/helpers'
  export let org
  export let label
  let { name, logo, dimensions } = org
</script>

<figure class="Sponsor">
  <figcaption>{label}</figcaption>
  <img
    src={logo.url}
    width={logo.dimensions.width}
    height={logo.dimensions.height}
    draggable="false"
    alt="{asText(name)} logo" />
</figure>

<style>
  figure {
    margin-top: var(--space-sm)
  }

  figcaption {
    font-size: 0.75rem;
    margin-bottom: 0.1875rem;
  }

  img {
    display: block;
    width: 100%;
    max-width: 7.25rem;
    margin-left: 1px;
  }
</style>
