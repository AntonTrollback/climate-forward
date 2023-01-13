<script>
  import SpeakerDetails from './SpeakerDetails.svelte'
  import SpeakerLink from './SpeakerLink.svelte'
  import SpeakerGrid from './SpeakerGrid.svelte'
  import Modal from './Modal.svelte'
  import { asText } from '@prismicio/helpers'

  export let items = []
  export let limit = 6
  export let heading = false
  export let current = null
  export let pushed = null
  export let standalone = null
  let speakers, prev, next

  function lastnameSort(a, b) {
    a = asText(a.data.name).split(' ').pop()
    b = asText(b.data.name).split(' ').pop()
    return a.localeCompare(b)
  }

  if (standalone) {
    speakers = items.slice().sort(lastnameSort)
  } else {
    speakers = items
      .slice(0, limit)
      .concat(items.slice(limit).sort(lastnameSort))
  }

  function open(event) {
    goTo(event.currentTarget.dataset.slug)
  }

  function handlekey(event) {
    if (event.key === 'Escape' && current) close()
    if (event.key === 'ArrowLeft') goPrev()
    if (event.key === 'ArrowRight') goNext()
  }

  function close() {
    current = null
  }

  function goTo(slug) {
    current = speakers.find((item) => item.slug === slug)
    prev = speakers[speakers.indexOf(current) - 1]
    next = speakers[speakers.indexOf(current) + 1]
  }

  function goPrev() {
    if (!prev) return
    goTo(prev.slug)
  }

  function goNext() {
    if (!next) return
    goTo(next.slug)
  }
</script>

<svelte:window on:keydown={handlekey} />

{#if !standalone}
  <div class="component">
    <SpeakerGrid {speakers} {limit} />
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
      {#each speakers as speaker}
        <li class="item">
          <div class="body">
            <SpeakerLink
              {speaker}
              role={speaker.data.role}
              large
              onclick={open} />
          </div>
        </li>
      {/each}
    </ul>
  </div>

  {#if current}
    <Modal prev={prev ? goPrev : null} next={next ? goNext : null}>
      <SpeakerDetails speaker={current} />
      <button slot="close" on:click={close}>Close</button>
    </Modal>
  {/if}
{/if}

<style>
  .component {
    margin-top: var(--space-block-md);
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
    }
  }

  @media (min-width: 1000px) {
    .pushed {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 calc(var(--space-grid) * 2);
    }

    .pushed .header {
      width: calc(100% / 3);
    }

    .pushed .header > * {
      max-width: 23rem;
    }

    .pushed .list {
      grid-column: span 2;
      margin-top: 0.35rem;
    }
  }
</style>
