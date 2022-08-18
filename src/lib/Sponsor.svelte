<script>
  import { asText } from '@prismicio/helpers'
  export let org
  export let label = null
  export let size = 'md'
  let { name, logo, multiplier, link } = org
</script>

<a
  class="Sponsor {size} {$$props.class || ''}"
  href={link ? link.url : '#'}
  rel="noreferrer noopener"
  target="_blank">
  {#if label}<span>{label}</span>{/if}
  <span class="u-hiddenVisually">{asText(name)}</span>
  <img
    style="--size-multiplier: {multiplier ? multiplier : 50}"
    src={logo.url}
    title="Visit the {asText(name)} website"
    width={logo.dimensions.width}
    height={logo.dimensions.height}
    role="presentation"
    draggable="false"
    alt="{asText(name)} logo" />
</a>

<style>
  a {
    -webkit-user-select: none;
    user-select: none;
    display: inline-block;
    cursor: pointer;
    transition: opacity 250ms var(--ease-out);
  }

  a:active {
    transition: none;
    opacity: 0.6;
  }

  span {
    font-size: 0.75rem;
    margin-bottom: var(--space-xs);
  }

  img {
    display: block;
    width: 100%;
    margin-left: 1px;
    width: calc(7rem * (var(--size-multiplier) / 100));
  }

  .sm img {
    width: calc(5rem * (var(--size-multiplier) / 100));
  }

  .lg img {
    width: calc(9rem * (var(--size-multiplier) / 100));
  }

  @media (min-width: 1000px) {
    .lg img {
      width: calc(11rem * (var(--size-multiplier) / 100));
    }
  }

  .lg span {
    margin-bottom: var(--space-sm);
  }
</style>
