<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import { gettext } from './utils/i18n.js'
  import RichText from './RichText.svelte'
  import Divider from './Divider.svelte'
  import Session from './Session.svelte'
  import { asText } from '@prismicio/helpers'
  import Link from './Link.svelte'

  export const text = gettext(translations)

  export let speaker
  export let sessions = null
  export let type = 'card'
</script>

<article class="Speaker Speaker--{type}">
  {#if type === 'link'}
    <figure class="portrait">
      {#if speaker.data.image?.url}
        <img
          src={speaker.data.image.url}
          alt="Portrait of {asText(speaker.data.name)}" />
      {/if}
    </figure>
  {/if}
  <div class="details">
    {#if type === 'card'}
      <h2 class="Text-h3 title">{asText(speaker.data.name)}</h2>
      <h2 class="Text-h3"><em>{speaker.data.title}</em></h2>
      <figure class="portrait">
        {#if speaker.data.image?.url}
          <img
            src={speaker.data.image.url}
            alt="Portrait of {asText(speaker.data.name)}" />
        {/if}
      </figure>
    {:else}
      <h4 class="Text-h4 Text-single">{asText(speaker.data.name)}</h4>
      <h4 class="desc">{speaker.data.title}</h4>
    {/if}

    {#if type === 'card'}
      <RichText size="sm" fields={speaker.data.bio} />
    {/if}
    {#if type === 'link'}
      <Link class="u-spaceTopXs u-trigger u-triggerBlock" document={speaker}
        >{text`Learn more`}</Link>
    {/if}
  </div>
  {#if sessions?.length}
    <Divider size="md" />
    <h3 class="Text-h5">Speaking at</h3>
    <ul class="grid">
      {#each sessions as session}
        <li class="item">
          <div class="body">
            <Session type="link" simple {session} />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</article>

<style>
  .Speaker {
    position: relative;
  }

  .Speaker--link {
    display: flex;
  }

  /* Portrait */

  .portrait {
    margin: 1.25rem 0;
  }

  .Speaker--link .portrait {
    flex: 0 0 8.5rem;
    margin: 0 1.5rem 0 0;
  }

  .portrait img {
    width: 100%;
    height: auto;
    background: var(--current-color-placeholder);
  }

  @media (min-width: 500px) {
    .portrait {
      flex: 0 0 10rem;
    }
  }

  @media (min-width: 700px) {
    .Speaker--card .portrait {
      order: -1;
      margin: 0;
      grid-row: span 100;
    }
  }

  @media (min-width: 800px) {
    .portrait {
      flex: 0 0 6.5rem;
      margin-right: 1.5rem;
    }
  }

  @media (min-width: 900px) {
    .portrait {
      flex: 0 0 8.5rem;
      margin-right: 1.25rem;
    }
  }

  @media (min-width: 1000px) {
    .portrait {
      flex: 0 0 10rem;
    }
  }

  .details {
    max-width: 19rem;
  }

  @media (min-width: 700px) {
    .Speaker--card .details {
      display: grid;
      grid-template-columns: 10rem 1fr;
      grid-gap: 0 2rem;
    }
  }

  @media (min-width: 800px) {
    .Speaker--card .details {
      grid-template-columns: 14.5rem 1fr;
      grid-gap: 0 3rem;
    }
  }

  .Speaker--card .title {
    margin-right: 2.5rem;
  }

  .Speaker--card .details {
    max-width: none;
  }

  /* .name {
    width: 100%;
    font-size: 1.35rem;
    line-height: 1.05;
    letter-spacing: -0.01em;
    font-weight: 900;
    margin: 0 0 0.375rem 0;
  } */

  .desc {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0;
    margin-top: var(--space-xs);
  }

  .Speaker--card .desc {
    font-size: 1.35rem;
    font-family: var(--doc-heading-font-family);
    margin-bottom: 1rem;
  }

  @media (min-width: 1000px) {
    /* .name {
      font-size: 1.625rem;
    } */

    .desc {
      font-size: 1.125rem;
    }
  }

  /* Session grid */

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-grid);
    margin-top: 1.5rem;
  }

  .item {
    position: relative;
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      column-gap: calc(var(--space-grid) * 2);
    }
  }
</style>
