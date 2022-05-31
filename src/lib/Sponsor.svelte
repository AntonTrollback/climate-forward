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
  export let size = 'md'
  let { name, logo } = org
</script>

<figure class="Sponsor {size} {$$props.class || ''} ">
  {#if label}<figcaption>{label}</figcaption>{/if}
  <img
    class={logo.dimensions.height * 1.1 > logo.dimensions.width
      ? 'portrait'
      : ''}
    src={logo.url}
    width={logo.dimensions.width}
    height={logo.dimensions.height}
    draggable="false"
    alt="{asText(name)} logo" />
</figure>

<style>
  figure {
    -webkit-user-select: none;
    user-select: none;
  }

  figcaption {
    font-size: 0.75rem;
    margin-bottom: var(--space-xs);
  }

  img {
    display: block;
    width: 100%;
    max-width: 8.75rem;
    margin-left: 1px;
  }

  .sm img {
    max-width: 5rem;
  }

  .md img {
    max-width: 7rem;
  }

  .lg img {
    max-width: 12rem;
  }

  .lg figcaption {
    margin-bottom: var(--space-sm);
  }

  .portrait {
    max-height: 3.5rem;
    width: auto;
  }

  .lg .portrait {
    max-height: 5rem;
    width: auto;
  }
</style>
