<script>
  import SpeakerCard from './SpeakerCard.svelte'
  export let speakers = []
  export let limit = 6
  export let lazy = false
  const extra = speakers.slice(limit)
</script>

<div class="grid">
  {#each speakers.slice(0, limit) as speaker}
    <div class="item">
      <div class="body">
        <SpeakerCard {speaker} {lazy} />
      </div>
    </div>
  {/each}
  {#if extra.length}
    <details>
      <summary class="u-expand">Show more</summary>
      <svelte:self speakers={extra} limit={18} lazy={true} />
    </details>
  {/if}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-grid);
  }

  .grid .item {
    position: relative;
    padding-bottom: var(--space-grid);
    border-bottom: 1px solid var(--current-color-border);
  }

  .grid .body {
    position: relative;
    display: flex;
  }

  .grid .item:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (min-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      column-gap: calc(var(--space-grid) * 2);
    }

    .grid details {
      grid-column: span 2;
    }

    .grid .body::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      top: 0;
      left: calc(var(--space-grid) * -1);
      background: var(--current-color-border);
    }
  }

  @media (min-width: 800px) and (max-width: 1299px) {
    .grid .item:nth-child(odd) .body::before {
      content: none;
    }

    .grid .item:nth-child(2n + 1):nth-last-child(-n + 2),
    .grid .item:nth-child(2n + 1):nth-last-child(-n + 2) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  @media (min-width: 1300px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .grid details {
      grid-column: span 3;
    }

    .grid .item:nth-child(3n + 1) .body::before {
      content: none;
    }

    .grid .item:nth-child(3n + 1):nth-last-child(-n + 3),
    .grid .item:nth-child(3n + 1):nth-last-child(-n + 3) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  summary {
    margin-top: calc(var(--space-grid) * -1 - 1px);
    padding-top: 0.5rem;
    border-top: 1px solid var(--current-color-border);
  }

  details[open] > summary {
    display: none;
  }
</style>
