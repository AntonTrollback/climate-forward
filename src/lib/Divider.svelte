<script>
  export let size
  export let solid
  export let contain

  let className = `${size} ${solid ? 'solid' : ''} ${
    contain ? 'u-container' : ''
  }`
</script>

<div class={className} />

<style>
  div::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: var(--space-md) 0 var(--space-xs);
    background: var(--current-color-border);
  }

  .solid::after {
    background: var(--current-color);
  }

  .xs::after {
    margin-top: var(--space-xs) !important;
  }

  .sm::after {
    margin-top: var(--space-sm) !important;
  }

  .md::after {
    margin-top: var(--space-md) !important;
  }

  .lg::after {
    margin-top: var(--space-lg) !important;
  }

  .xl::after {
    margin-top: var(--space-xl) !important;
  }
</style>
