<script>
  export let size = 'md'
  export let solid = false
  export let contain = false

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
    margin: var(--space-block-sm) 0 var(--space-sm);
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
    margin-top: var(--space-block-sm) !important;
  }

  .lg::after {
    margin-top: var(--space-block-md) !important;
  }

  .xl::after {
    margin-top: var(--space-block-xl) !important;
  }
</style>
