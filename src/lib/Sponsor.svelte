<script>
  import { asText } from '@prismicio/helpers'
  export let org
  export let label = null
  export let size = 'md'
  let { name, logo, multiplier } = org
</script>

<figure class="Sponsor {size} {$$props.class || ''} ">
  {#if label}<figcaption>{label}</figcaption>{/if}
  <img
    class={logo.dimensions.height * 1.1 > logo.dimensions.width
      ? 'portrait'
      : ''}
    style="--size-multiplier: {multiplier ? multiplier : 50}"
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

  .sm img[alt*="BCG"] {
    max-width: 4rem;
  }

  .md img {
    max-width: 7rem;
  }

  .lg img {
    max-width: 10rem;
  }

  @media (min-width: 1000px) {
    .lg img {
      max-width: 12rem;
    }
  }

  .lg figcaption {
    margin-bottom: var(--space-sm);
  }

  .portrait {
    max-height: 3.5rem;
    width: auto;
  }

  .lg .portrait {
    max-height: 4.25rem;
    width: auto;
    /* margin-bottom: -1.5rem; */
  }

  @media (min-width: 1000px) {
    .lg .portrait {
      max-height: 5rem;
    }
  }
</style>
