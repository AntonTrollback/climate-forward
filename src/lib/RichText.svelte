<script>
  import { getContext } from 'svelte'
  import { LINK } from './Link.svelte'
  import { asHTML, asText } from '@prismicio/helpers'
  import resolve from './utils/resolve.js'
  import whitespace from './utils/whitespace.js'

  export let fields = []
  export let title = null
  export let width = null
  export let size = 'md'

  if (fields?.length < 1) fields = null

  if (!size) size = 'md'

  function resolveLink(document) {
    const resolver = getContext(LINK)
    if (resolver) return resolver(document).href
    return resolve(document)
  }

  function serialize(type, element, content, children) {
    if (type === 'heading1') {
      return `<h2 class="Text-h1">${whitespace(children)}</h2>`
    }
    if (type === 'heading2') {
      return `<h2 class="Text-h2">${whitespace(children)}</h2>`
    }
    if (type === 'heading3') {
      return `<h3 class="Text-h3">${whitespace(children)}</h3>`
    }
    if (type === 'heading4') {
      return `<h4 class="Text-h4">${whitespace(children)}</h4>`
    }
    if (type === 'heading5') {
      return `<h5 class="Text-h5">${whitespace(children)}</h5>`
    }
    if (type === 'heading6') {
      return `<h6 class="Text-h6">${whitespace(children)}</h6>`
    }
    if (type === 'paragraph') {
      return `<p class="Text-p">${whitespace(children)}</p>`
    }
    if (type === 'group-list-item') {
      return `<ul class="Text-p Text-ul">${children}</ul>`
    }
    if (type === 'list-item') {
      return `<li>${whitespace(children)}</li>`
    }
    return null
  }
</script>

{#if title}
  <div class="layout">
    <div class="aside">
      <div class="Text Text--xl Text--spaced">
        <h2 class="Text-p">{@html whitespace(asText(title))}</h2>
      </div>
    </div>
    <div class="main">
      <div
        class="Text Text--spaced"
        style={width ? `--max-width: ${width}em` : null}>
        {#if fields}
          {@html asHTML(fields, resolveLink, serialize)}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div
    class="Text Text--spaced Text--{size} {$$props.class || ''}"
    style={width ? `--max-width: ${width}em` : null}>
    {@html asHTML(fields, resolveLink, serialize)}
  </div>
{/if}

<style>
  :global([id*='rich_text'] + [id*='rich_text']) {
    margin-top: var(--space-md);
  }

  .aside {
    margin-bottom: var(--space-md);
  }

  @media (min-width: 1000px) {
    .layout {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 calc(var(--space-grid) * 2);
    }

    .aside > * {
      max-width: 23rem;
    }

    .main {
      grid-column: span 2;
    }
  }
</style>
