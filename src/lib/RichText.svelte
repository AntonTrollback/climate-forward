<script>
  import { getContext } from 'svelte'
  import { LINK } from './Link.svelte'
  import { asHTML, asText } from '@prismicio/helpers'
  import resolve from './utils/resolve.js'
  import whitespace from './utils/whitespace.js'

  export let fields
  export let title = null
  export let wide = null
  export let size = 'md'
  export let collapsed = null
  export let questions = null
  export let limit = null

  if (fields?.length < 1) fields = null
  if (collapsed?.length < 1) collapsed = null
  if (questions)
    questions = questions.filter((item) => item && item.text.length)
  if (questions?.length < 1) questions = null

  if (questions?.length > limit) {
    questions = [questions.slice(0, limit), questions.slice(limit)]
  } else if (questions?.length) {
    questions = [questions]
  }
  collapsed = collapsed && collapsed[0].text.length ? collapsed : null

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
    if (resolver) return resolver(document).href
    return resolve(document)
  }

  function serialize(type, element, content, children) {
    if (type === 'heading1') {
      return `<h2 class="Text-h1">${children}</h2>`
    }
    if (type === 'heading2') {
      return `<h2 class="Text-h2">${children}</h2>`
    }
    if (type === 'heading3') {
      return `<h3 class="Text-h3">${children}</h2>`
    }
    if (type === 'heading4') {
      return `<h4 class="Text-h4">${children}</h2>`
    }
    if (type === 'heading5') {
      return `<h5 class="Text-h5">${children}</h2>`
    }
    if (type === 'heading6') {
      return `<h6 class="Text-h6">${children}</h2>`
    }
    if (type === 'paragraph') {
      return `<p class="Text-p">${whitespace(children)}</p>`
    }
    return null
  }
</script>

{#if title}
  <div class="layout">
    <div class="aside">
      <div class="Text Text--xl Text--spaced">
        <h2 class="Text-p">{asText(title)}</h2>
      </div>
    </div>
    <div class="main">
      <div class="Text Text--spaced {wide ? 'Text--wide' : ''}">
        {#if fields}
          {@html asHTML(fields, resolveLink, serialize)}
        {/if}
        {#if collapsed}
          <details>
            <summary>Read more</summary>
            {@html asHTML(collapsed, resolveLink, serialize)}
          </details>
        {/if}
        {#if questions}
          {#each questions[0] as question}
            {@html asHTML(question.text, resolveLink, serialize)}
          {/each}
          {#if questions[1]}
            <details>
              <summary>Show {questions[1].length} more</summary>
              {#each questions[1] as question}
                {@html asHTML(question.text, resolveLink, serialize)}
              {/each}
            </details>
          {/if}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="Text Text--spaced {size} {$$props.class || ''} {wide ? 'Text--wide' : ''}">
    {@html asHTML(fields, resolveLink, serialize)}
  </div>
{/if}

<style>
  :global([id*='rich_text'] + [id*='rich_text']) {
    margin-top: var(--space-md);
  }

  summary {
    border-top: 1px solid var(--current-color-border);
    padding-top: var(--space-xs);
    margin-top: var(--space-block-sm);
    user-select: none;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: var(--doc-letter-spacing-wide);
    text-transform: uppercase;
  }

  details[open] summary {
    display: none;
  }

  .aside {
    margin-bottom: var(--space-md);
  }

  @media (min-width: 1000px) {
    .layout {
      display: flex;
    }

    .aside {
      width: calc(100% / 3);
      padding-right: 2rem;
      flex-shrink: 0;
    }

    .aside > * {
      max-width: 23rem;
    }

    .main {
      padding-left: 2rem;
      flex-grow: 1;
    }
  }
</style>
