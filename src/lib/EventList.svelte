<script>
  import RichText from './RichText.svelte'
  import Link from './Link.svelte'
  import Previous from './Previous.svelte'
  import Divider from './Divider.svelte'
  import { asText } from '@prismicio/helpers'
  import resolve from './utils/resolve.js'
  export let items
  export let props = { large: false }
  let { large } = props
</script>

<style>
  .action {
    padding-top: 0.5rem;
    border-top: 1px solid var(--current-color-border);
    margin-top: var(--space-grid);
  }

  :global(.eventlink):hover .linked {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
    transition: opacity 250ms var(--ease-out);
  }

  :global(.eventlink):active .linked {
    transition: none;
    opacity: 0.5;
  }
</style>
