<script>
  import RichText from './RichText.svelte'
  import Divider from './Divider.svelte'
  import Session from './Session.svelte'
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'
  import Link from './Link.svelte'

  export let speaker
  export let sessions = null
  export let type = 'card'
  export let lazy = false
</script>

<article class="Speaker Speaker--{type}">
  {#if type === 'link'}
    <figure class="portrait">
      {#if speaker.data.image?.url}
        <img
          sizes="8.5rem"
          srcset="{src('w_136/f_auto', speaker.data.image.url)} 136w,{src(
            'w_272/f_auto',
            speaker.data.image.url
          )} 272w,{src('w_408/f_auto', speaker.data.image.url)} 408w"
          src={src('w_408/f_auto', speaker.data.image.url)}
          loading={lazy ? 'lazy' : 'eager'}
          width={speaker.data.image.dimensions.width}
          height={speaker.data.image.dimensions.height}
          alt="Portrait of {asText(speaker.data.name)}" />
      {/if}
    </figure>
  {/if}
  <div class="details">
    {#if type === 'card'}
      <h1 class="Text-h3 title">{asText(speaker.data.name)}</h1>
      <p class="Text-h3"><em>{speaker.data.title}</em></p>
      <figure class="portrait">
        {#if speaker.data.image?.url}
          <img
            sizes="8.5rem"
            srcset="{src('w_136/f_auto', speaker.data.image.url)} 136w,{src(
              'w_272/f_auto',
              speaker.data.image.url
            )} 272w,{src('w_408/f_auto', speaker.data.image.url)} 408w"
            src={src('w_408/f_auto', speaker.data.image.url)}
            width={speaker.data.image.dimensions.width}
            height={speaker.data.image.dimensions.height}
            alt="Portrait of {asText(speaker.data.name)}" />
        {/if}
        {#if speaker.data.image?.url}
          <img
            sizes="12.7rem"
            srcset="{src('w_203/f_auto', speaker.data.image.url)} 203w,{src(
              'w_406/f_auto',
              speaker.data.image.url
            )} 406w,{src('w_609/f_auto', speaker.data.image.url)} 609w"
            src={src('w_609/f_auto', speaker.data.image.url)}
            width={speaker.data.image.dimensions.width}
            height={speaker.data.image.dimensions.height}
            alt="Portrait of {asText(speaker.data.name)}" />
        {/if}
      </figure>
    {:else}
      <strong class="Text-h4">{asText(speaker.data.name)}</strong>
      <p class="desc">{speaker.data.title}</p>
    {/if}

    {#if type === 'card' && speaker.data.bio}
      <RichText class="u-spaceMd" fields={speaker.data.bio} />
    {/if}
    {#if type === 'link'}
      <Link class="u-spaceSm u-trigger u-triggerBlock" document={speaker}>
        Learn more
        <span class="u-hiddenVisually">about {asText(speaker.data.name)}</span>
      </Link>
    {/if}
  </div>
  {#if sessions?.length}
    <Divider size="md" />
    <h2 class="Text-h5">Speaking at</h2>
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
    position: relative;
    margin: 1.25rem 0;
  }

  @media (max-width: 699px) {
    .Speaker--card .portrait {
      margin: 1.25rem 0;
      height: 0;
      padding-bottom: 110%;
      position: relative;
      overflow: hidden;
    }

    .Speaker--card .portrait img {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      object-position: center;
      object-fit: cover;
      background: var(--current-color-placeholder);
    }
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

  .portrait img + img {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
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
      grid-template-columns: 12.7rem 1fr;
      grid-gap: 0 2.5rem;
    }
  }

  .Speaker--card .title {
    padding-right: 2.5rem;
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
