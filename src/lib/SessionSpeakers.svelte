<script>
  import { asText } from '@prismicio/helpers'
  import Speaker from './Speaker.svelte'
  import Modal from './Modal.svelte'
  export let items
  export let current
  let speakers

  function lastnameSort(a, b) {
    a = asText(a.data.name).split(' ').pop()
    b = asText(b.data.name).split(' ').pop()
    return a.localeCompare(b)
  }

  if (items.length) {
    speakers = items.sort(lastnameSort)
  }

  function open(event) {
    current = speakers[event.currentTarget.dataset.index]
  }
  function close() {
    current = null
  }
</script>

{#if speakers?.length}
  <div class="SessionSpeakers">
    <div class="aside">
      <div class="Text Text--xl">
        <h3 class="Text-p">Speakers</h3>
      </div>
    </div>
    <ul class="grid">
      {#each speakers as speaker, index}
        <li class="item">
          <div class="body">
            <button class="speaker" data-index={index} on:click={open}>
              <img
                src={speaker.data.image.url}
                width="100"
                height="100"
                alt="Portrait of {asText(speaker.data.name)}" />
              <div>
                <strong>{asText(speaker.data.name)}</strong>
                {speaker.data.title}
              </div>
            </button>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}

{#if current}
  <Modal>
    <Speaker speaker={current} />
    <button slot="close" on:click={close}>Close</button>
  </Modal>
{/if}

<style>
  .aside {
    margin-bottom: var(--space-md);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-top: 2rem;
    max-width: 45rem;
  }

  .item {
    position: relative;
  }

  :global(.SessionSpeakers .speaker) {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.2;
    transition: opacity 250ms var(--ease-out);
    max-width: 25rem;
    text-align: left;
  }

  :global(.SessionSpeakers .speaker:hover strong) {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.11em;
  }

  :global(.SessionSpeakers .speaker:active) {
    opacity: 0.6;
    transition: none;
  }

  :global(.SessionSpeakers .speaker strong) {
    display: block;
  }

  :global(.SessionSpeakers .speaker img) {
    flex-shrink: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
  }

  @media (min-width: 500px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .grid .item:only-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 700px) {
    .grid .item:only-child {
      grid-column: 1 / 3;
    }

    :global(.SessionSpeakers .speaker) {
      font-size: 1rem;
    }

    :global(.SessionSpeakers .speaker img) {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  @media (min-width: 900px) {
    .grid {
      grid-gap: 2.5rem;
    }
  }

  @media (min-width: 1000px) {
    .SessionSpeakers {
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

    .grid {
      padding-left: 2rem;
      flex-grow: 1;
      margin-top: 0.35rem;
    }
  }
</style>
