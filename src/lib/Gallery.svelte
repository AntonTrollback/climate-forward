<script>
  import RichText from './RichText.svelte'
  import src from './utils/src.js'
  export let photos = []
  export let horizontal = false
</script>

<div class="u-container">
  <div class="cols {horizontal ? 'horizontal' : ''}">
    {#each photos as photo}
      <figure class="col">
        {#if photo.video}
          <video
            playsinline="true"
            muted="true"
            autoplay="true"
            loop="true"
            src={photo.video} />
        {:else}
          <img
            sizes="(min-width: 1000px) 40vw, 80vw"
            srcset="{src('w_600/f_auto', photo.image.url)} 600w,{src(
              'w_900/f_auto',
              photo.image.url
            )} 900w,{src('w_1200/f_auto', photo.image.url)} 1200w,{src(
              'w_1800/f_auto',
              photo.image.url
            )} 1800w"
            src={src('w_170/f_auto', photo.image.url)}
            width={photo.image.dimensions.width}
            height={photo.image.dimensions.height}
            alt={photo.image.alt ? photo.image.alt : ''} />
        {/if}
        {#if photo.text || photo.image.copyright}
          <figcaption>
            {#if photo.image.copyright}
              <span class="credits">{photo.image.copyright}</span>
            {/if}
            {#if photo.text && photo.text.length}
              <RichText size="sm" fields={photo.text} />
            {/if}
          </figcaption>
        {/if}
      </figure>
    {/each}
  </div>
</div>

<style>
  .cols {
    margin-top: var(--space-block-md);
    display: flex;
    flex-wrap: wrap;
    grid-gap: var(--space-grid) calc(var(--space-grid) * 2);
  }

  .col {
    width: 100%;
  }

  img,
  video {
    width: 100%;
    background: var(--current-color-placeholder);
  }

  figcaption {
    position: relative;
    margin-top: var(--space-lg);
  }

  .credits {
    position: absolute;
    top: calc(var(--space-lg) * -1);
    margin-top: var(--space-xs);
    right: 0;
    color: var(--current-color-muted);
    font-size: 0.75rem;
  }

  @media (min-width: 1000px) {
    .cols {
      flex-wrap: wrap;
    }

    .col {
      width: calc(50% - var(--space-grid));
    }

    .horizontal .col {
      width: 100%;
    }

    .horizontal figure {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: var(--space-grid);
      column-gap: calc(var(--space-grid) * 2);
    }

    .horizontal img,
    .horizontal video {
      grid-column: span 2;
    }

    .horizontal figcaption {
      order: -1;
      margin: 0;
    }

    .horizontal figcaption::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      top: 0;
      right: calc(var(--space-grid) * -1);
      background: var(--current-color-border);
    }

    .horizontal .col + .col {
      border-top: 1px solid var(--current-color-border);
      padding-top: var(--space-grid);
    }

    .horizontal .col + .col figcaption::before {
      position: absolute;
      top: calc((var(--space-grid) * 1.5) * -1);
      right: calc((var(--space-grid) * 2) * -1);
      content: '';
      background: var(--current-color-background);
      width: calc(var(--space-grid) * 2);
      height: var(--space-grid);
    }
  }
</style>
