<script>
  import { asText } from '@prismicio/helpers'
  import RichText from './RichText.svelte'
  import whitespace from './utils/whitespace.js'
  export let title
  export let topics
</script>

<div class="layout">
  <div class="aside">
    <div class="Text Text--xl">
      {#if title && title.length > 0}
        <h2 class="Text-p">{@html whitespace(asText(title))}</h2>
      {/if}
    </div>
  </div>
  <div class="main">
    {#each topics as item}
      {#if item.topic.length > 0}
        <details>
          <summary>{@html whitespace(asText(item.topic))}</summary>
          <RichText fields={item.content} />
        </details>
      {/if}
    {/each}
  </div>
</div>

<style>
  .aside {
    margin-bottom: var(--space-md);
  }

  summary {
    display: flex;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    transition: opacity 350ms var(--ease-out);
    opacity: 1;
    cursor: pointer;
    border-top: 1px solid var(--current-color-border);
    padding: 0.75rem 0;
    line-height: 1.3;
    font-weight: 500;
    font-size: 1.125rem;
  }

  @media (min-width: 1200px) {
    summary {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  details:first-child summary {
    border-top: 0;
    margin-top: 1rem;
  }

  @media (min-width: 1000px) {
    details:first-child summary {
      margin-top: -0.2rem;
    }
  }

  summary:active {
    transition: none;
    opacity: 0.7;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::before {
    content: '';
    width: 1.6875rem;
    height: 1.6875rem;
    flex-shrink: 0;
    margin: -2px 0.75rem 0 -1px;
    border: 1px solid;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' fill='none'%3E%3Ccircle cx='13.39' cy='13.75' r='13' fill='transparent'/%3E%3Cpath d='m8.44 11.7 4.95 4.94 4.95-4.95' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: transform 350ms var(--ease-out);
    transform-origin: center center;
  }

  @media (min-width: 1200px) {
    summary::before {
      margin-top: -1px;
    }
  }

  details:not(:last-child)[open] {
    margin-bottom: var(--space-block-sm);
  }

  details[open] > summary::before {
    transform: rotate(-0.5turn);
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
