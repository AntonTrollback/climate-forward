<script>
  import { getContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import { asHTML, asText } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'

  export let fields
  export let title
  export let size

  size =
    size === 'sm'
      ? 'Text--sm'
      : size === 'lg'
      ? 'Text--lg'
      : size === 'xl'
      ? 'Text--xl'
      : ''

  function resolveLink(document) {
    const resolver = getContext(LINK)
    if (resolver) return resolver({ document }).href
    return resolve(document)
  }
</script>

{#if title}
  <div class="layout">
    <div class="aside">
      <div class="Text Text--xl"><p>{asText(title)}</p></div>
    </div>
    <div class="main">
      <div class="Text">{@html asHTML(fields, resolveLink)}</div>
    </div>
  </div>
{:else}
  <div class="Text {size}">{@html asHTML(fields, resolveLink)}</div>
{/if}

<style>
  @media (min-width: 1000px) {
    .layout {
      display: flex;
    }

    .aside {
      width: calc(100% / 3);
      padding-right: 2rem;
    }

    .main {
      padding-left: 2rem;
      flex-grow: 1;
    }
  }
</style>
