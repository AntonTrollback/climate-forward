<script>
  import Link from '$lib/Link.svelte'
  export let text
  export let document
</script>

<Link class="Button" {document}>{text}</Link>

<style>
  :global(.Button) {
    position: relative;
    display: inline-flex;
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
    transition: opacity 150ms var(--ease-out);
    -webkit-touch-callout: none;
    -webkit-appearance: none;
  }

  @media print {
    :global(.Button) {
      display: none !important;
    }
  }

  :global(.Button:hover) {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  :global(.Button:active) {
    transition: none;
    opacity: 0.6;
  }

  :global(.Button--solid) {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  :global(.Button:focus-visible) {
    outline-width: var(--focus-ring-width) !important;
    outline-color: var(--focus-ring-color) !important;
  }

  :global(.Button[disabled]),
  :global(.Button.disabled) {
    --current-color: var(--current-color-border);
    --current-color-background: var(--current-color-muted);
    pointer-events: none;
    cursor: not-allowed;
  }
</style>
