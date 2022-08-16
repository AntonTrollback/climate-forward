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
    margin-left: 1px;
    width: calc(7.5rem * (var(--size-multiplier) / 100));
  }

  .sm img {
    width: calc(5rem * (var(--size-multiplier) / 100));
  }

  .lg img {
    width: calc(9rem * (var(--size-multiplier) / 100));
  }

  @media (min-width: 1000px) {
    .lg img {
      width: calc(12rem * (var(--size-multiplier) / 100));
    }
  }

  .lg figcaption {
    margin-bottom: var(--space-sm);
  }
</style>
