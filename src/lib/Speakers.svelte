<script>
  import Speaker from './Speaker.svelte'
  export let items
  export let limit = 6
  let speakers

  if (items.length > limit) {
    speakers = [items.slice(0, limit), items.slice(limit)]
  } else {
    speakers = [items]
  }
</script>

<div class="Speakers">
  <div class="grid">
    {#each speakers[0] as speaker}
      <section class="item">
        <div class="body">
          <Speaker type="link" {speaker} />
        </div>
      </section>
    {/each}
    {#if speakers[1]?.length}
      <details>
        <summary class="u-expand">Show all speakers</summary>
        <div class="grid">
          {#each speakers[1] as speaker}
            <section class="item">
              <div class="body">
                <Speaker type="link" {speaker} />
              </div>
            </section>
          {/each}
        </div>
      </details>
    {/if}
  </div>
</div>

<style>
  .Speakers {
    margin-top: var(--space-lg);
  }

  summary {
    margin-top: calc(var(--space-grid) * -1 - 1px);
    padding-top: 0.5rem;
    border-top: 1px solid var(--current-color-border);
  }

  details[open] summary {
    display: none;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-grid);
  }

  .item {
    position: relative;
    padding-bottom: var(--space-grid);
    border-bottom: 1px solid var(--current-color-border);
  }

  .body {
    position: relative;
    display: flex;
  }

  .item:last-child {
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

    .body::before {
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
    .item:nth-child(odd) .body::before {
      content: none;
    }

    .item:nth-child(2n + 1):nth-last-child(-n + 2),
    .item:nth-child(2n + 1):nth-last-child(-n + 2) ~ .item {
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

    .item:nth-child(3n + 1) .body::before {
      content: none;
    }

    .item:nth-child(3n + 1):nth-last-child(-n + 3),
    .item:nth-child(3n + 1):nth-last-child(-n + 3) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
</style>
