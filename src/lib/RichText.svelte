<script>
  import { getContext } from 'svelte'
  import { LINK } from '$lib/Link.svelte'
  import { asHTML, asText } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'

  export let fields
  export let title = null
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
      <div class="Text">
        {#if fields}
          {@html asHTML(fields, resolveLink)}
        {/if}
        {#if collapsed}
          <details>
            <summary>Read more</summary>
            {@html asHTML(collapsed, resolveLink)}
          </details>
        {/if}
        {#if questions}
          {#each questions[0] as question}
            {@html asHTML(question.text, resolveLink)}
          {/each}
          {#if questions[1]}
            <details>
              <summary>Show {questions[1].length} more</summary>
              {#each questions[1] as question}
                {@html asHTML(question.text, resolveLink)}
              {/each}
            </details>
          {/if}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="Text {size}">{@html asHTML(fields, resolveLink)}</div>
{/if}

<style>
  summary {
    border-top: 1px solid var(--current-color-border);
    padding-top: var(--space-xs);
    margin-top: var(--space-md);
    user-select: none;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.065em;
    text-transform: uppercase;
  }

  details[open] summary {
    display: none;
  }

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
