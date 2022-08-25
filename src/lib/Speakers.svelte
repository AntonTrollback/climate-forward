<script>
  import SpeakerCard from './SpeakerCard.svelte'
  import SpeakerDetails from './SpeakerDetails.svelte'
  import SpeakerLink from './SpeakerLink.svelte'
  import Modal from './Modal.svelte'
  import { asText } from '@prismicio/helpers'

  export let items
  export let limit = 6
  export let heading = false
  export let current = null
  export let pushed = null
  export let standalone = null
  let speakers

  function lastnameSort(a, b) {
    a = asText(a.data.name).split(' ').pop()
    b = asText(b.data.name).split(' ').pop()
    return a.localeCompare(b)
  }

  if (standalone) {
    speakers = items.sort(lastnameSort)
  } else {
    if (items.length > limit) {
      speakers = [items.slice(0, limit), items.slice(limit).sort(lastnameSort)]
    } else {
      speakers = [items]
    }
  }

  function open(event) {
    current = speakers.find(
      (item) => item.slug === event.currentTarget.dataset.slug
    )
  }

  function handlekey(event) {
    if (event.key === 'Escape' && current) close()
  }

  function close() {
    current = null
  }
</script>

<svelte:window on:keydown={handlekey} />

{#if !standalone}
  <div class="component">
    <div class="grid">
      {#each speakers[0] as speaker}
        <div class="item">
          <div class="body">
            <SpeakerCard {speaker} />
          </div>
        </div>
      {/each}
      {#if speakers[1]?.length}
        <details>
          <summary class="u-expand">Show all speakers</summary>
          <div class="grid">
            {#each speakers[1] as speaker, index}
              <div class="item">
                <div class="body">
                  <SpeakerCard lazy={index > 5} {speaker} />
                </div>
              </div>
            {/each}
          </div>
        </details>
      {/if}
    </div>
  </div>
{/if}

{#if standalone && heading && speakers?.length}
  <div class="standalone {pushed ? 'pushed' : ''}">
    <div class="header">
      <div class={pushed ? 'Text Text--xl' : 'Text'}>
        <h2 class={pushed ? 'Text-p' : 'Text-h4'}>{heading}</h2>
      </div>
    </div>
    <ul class="list">
      {#each speakers as speaker, index}
        <li class="item">
          <div class="body">
            <SpeakerLink {speaker} large={!pushed} onclick={open} />
          </div>
        </li>
      {/each}
    </ul>
  </div>

  {#if current}
    <Modal>
      <SpeakerDetails speaker={current} />
      <button slot="close" on:click={close}>Close</button>
    </Modal>
  {/if}
{/if}

<style>
  .component {
    margin-top: var(--space-block-md);
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

  .standalone .header {
    margin-bottom: var(--space-md);
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-top: 2rem;
  }

  .pushed .list {
    max-width: 45rem;
  }

  .list .item {
    position: relative;
  }

  @media (min-width: 500px) {
    .list {
      grid-template-columns: 1fr 1fr;
    }

    .list .item:only-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 700px) {
    .list .item:only-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 900px) {
    .list {
      grid-gap: 2.5rem;
    }

    .standalone:not(.pushed) .list {
      grid-template-columns: 1fr 1fr 1fr;
      /* grid-column: 1 / 3; */
    }
  }

  @media (min-width: 1000px) {
    .pushed {
      display: flex;
    }

    .pushed .header {
      width: calc(100% / 3);
      padding-right: 2rem;
      flex-shrink: 0;
    }

    .pushed .header > * {
      max-width: 23rem;
    }

    .pushed .list {
      padding-left: 2rem;
      flex-grow: 1;
      margin-top: 0.35rem;
    }
  }
</style>
