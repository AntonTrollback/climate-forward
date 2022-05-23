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
  export let label = null
  export let inline = false
  export let size = 'md'
  let { name, logo } = org
</script>

<figure class="Sponsor {inline ? 'inline' : ''}">
  {#if label}<figcaption>{label}</figcaption>{/if}
  <img
    class="{size} {logo.dimensions.height * 1.1 > logo.dimensions.width
      ? 'portrait'
      : ''}"
    src={logo.url}
    width={logo.dimensions.width}
    height={logo.dimensions.height}
    draggable="false"
    alt="{asText(name)} logo" />
</figure>

<style>
  figure {
    margin-top: var(--space-sm);
    user-select: none;
  }

  .inline {
    margin-top: 0.875rem;
  }

  figcaption {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  img {
    display: block;
    width: 100%;
    max-width: 8.75rem;
    margin-left: 1px;
  }

  .portrait {
    max-height: 3.5rem;
    width: auto;
  }

  img.sm {
    max-width: 5rem;
  }

  img.md {
    max-width: 7rem;
  }

  img.lg {
    max-width: 12rem;
  }

  .portrait.lg {
    max-height: 5rem;
    width: auto;
  }
</style>
