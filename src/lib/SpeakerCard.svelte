<script>
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'
  import Link from './Link.svelte'

  export let speaker
  export let lazy = false
</script>

<div class="component">
  <figure>
    {#if speaker.data.image?.url}
      <img
        sizes="12.7rem"
        srcset="{src('w_203/f_auto', speaker.data.image.url)} 203w,{src(
          'w_406/f_auto',
          speaker.data.image.url
        )} 406w,{src('w_609/f_auto', speaker.data.image.url)} 609w"
        src={src('w_609/f_auto', speaker.data.image.url)}
        width={speaker.data.image.dimensions.width}
        loading={lazy ? 'lazy' : 'eager'}
        height={speaker.data.image.dimensions.height}
        alt="Portrait of {asText(speaker.data.name)}" />
    {/if}
  </figure>
  <div class="body">
    <strong class="Text-h4">{asText(speaker.data.name)}</strong>
    <p>{speaker.data.title}</p>

    <Link class="u-spaceSm u-trigger u-triggerBlock" document={speaker}>
      Learn more
      <span class="u-hiddenVisually">about {asText(speaker.data.name)}</span>
    </Link>
  </div>
</div>

<style>
  .component {
    position: relative;
    display: flex;
  }

  figure {
    flex: 0 0 8.5rem;
    margin: 0 1rem 0 0;
  }

  @media (min-width: 500px) {
    figure {
      flex: 0 0 10rem;
      margin: 0 1.5rem 0 0;
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

  img {
    width: 100%;
    height: auto;
    background: var(--current-color-placeholder);
  }

  .body {
    max-width: 19rem;
  }

  .body p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0;
    margin-top: var(--space-xs);
  }

  @media (min-width: 1000px) {
    .body p {
      font-size: 1.125rem;
    }
  }
</style>
