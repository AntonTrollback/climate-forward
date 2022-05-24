<svelte:options tag="nyt-button" />

<script>
  import { linkResolver } from './Link.svelte'

  export let solid = false
  export let onclick = null
  export let document

  $: attrs = {
    ...$$restProps,
    ...linkResolver(document),
    class: `Button ${$$props.class || ''}`
  }
</script>

{#if attrs.href}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    {...attrs}
    class="Button {$$props.class || ''}"
    class:Button--solid={solid}
    on:click={onclick}>
    <slot />
  </a>
{:else}
  <button
    {...attrs}
    class="Button {$$props.class || ''}"
    class:Button--solid={solid}
    on:click={onclick}>
    <slot />
  </button>
{/if}

<style>
  .Button {
    position: relative;
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 1.25em;
    min-height: 2.75rem;
    border: 1px solid currentColor;
    font-size: 0.875rem;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    user-select: none;
    border-radius: 0.125rem;
    transition: opacity 250ms var(--ease-out);
    opacity: 1;
    -webkit-touch-callout: none;
    -webkit-appearance: none;
  }

  @media print {
    .Button {
      display: none !important;
    }
  }

  .Button:hover {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  .Button:active {
    transition: none;
    opacity: 0.6;
  }

  .Button--solid {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  .Button:focus-visible {
    outline-width: var(--focus-ring-width) !important;
    outline-color: var(--focus-ring-color) !important;
  }

  .Button:disabled {
    --current-color: var(--current-color-border);
    --current-color-background: var(--current-color-muted);
    pointer-events: none;
    cursor: not-allowed;
  }
</style>
