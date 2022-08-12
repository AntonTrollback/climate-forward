<script>
  import RichText from './RichText.svelte'
  import Divider from './Divider.svelte'
  import SessionCard from './SessionCard.svelte'
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'

  export let speaker
  export let sessions = null
</script>

<article class="component">
  <div class="details">
    <h1 class="Text-h3 title">{asText(speaker.data.name)}</h1>
    <p class="Text-h3"><em>{speaker.data.title}</em></p>

    <figure>
      {#if speaker.data.image?.url}
        <!-- Loading placeholder -->
        <img
          role="presentation"
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

    {#if speaker.data.bio}
      <RichText class="u-spaceMd" fields={speaker.data.bio} />
    {/if}
  </div>

  {#if sessions?.length}
    <Divider size="md" />
    <h2 class="Text-h5">Speaking at</h2>

    <ul class="grid">
      {#each sessions as session}
        <li class="item">
          <div class="body">
            <SessionCard showdate {session} />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</article>

<style>
  .component {
    position: relative;
  }

  figure {
    position: relative;
    margin: 1.25rem 0;
  }

  img {
    width: 100%;
    height: auto;
    background: var(--current-color-placeholder);
  }

  @media (max-width: 699px) {
    figure {
      margin: 1.25rem 0;
      height: 0;
      padding-bottom: 120%;
      position: relative;
      overflow: hidden;
    }

    figure img {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      object-position: center;
      object-fit: cover;
    }
  }

  figure img + img {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
  }

  @media (min-width: 500px) {
    figure {
      flex: 0 0 10rem;
    }
  }

  @media (min-width: 700px) {
    figure {
      order: -1;
      margin: 0;
      grid-row: span 100;
    }
  }

  @media (min-width: 800px) {
    figure {
      flex: 0 0 6.5rem;
      margin-right: 1.5rem;
    }
  }

  @media (min-width: 900px) {
    figure {
      flex: 0 0 8.5rem;
      margin-right: 1.25rem;
    }
  }

  @media (min-width: 1000px) {
    figure {
      flex: 0 0 10rem;
    }
  }

  .details {
    max-width: 19rem;
  }

  @media (min-width: 700px) {
    .details {
      display: grid;
      grid-template-columns: 10rem 1fr;
      grid-gap: 0 2rem;
    }
  }

  @media (min-width: 800px) {
    .details {
      grid-template-columns: 12.7rem 1fr;
      grid-gap: 0 2.5rem;
    }
  }

  .title {
    padding-right: 2.5rem;
  }

  .details {
    max-width: none;
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
