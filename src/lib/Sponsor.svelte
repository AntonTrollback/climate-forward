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
  export let inline
  export let size
  let { name, logo, dimensions } = org
</script>

<figure class="Sponsor {inline ? 'inline' : ''}">
  {#if label}<figcaption>{label}</figcaption>{/if}
  <img
    class={size}
    src={logo.url}
    width={logo.dimensions.width}
    height={logo.dimensions.height}
    draggable="false"
    alt="{asText(name)} logo" />
</figure>

<style>
  figure {
    margin-top: var(--space-sm);
  }

  .inline {
    margin-top: 0.875rem;
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

  img.sm {
    max-width: 5rem;
  }

  img.lg {
    max-width: 12rem;
  }
</style>
