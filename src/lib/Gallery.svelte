<script>
  import RichText from './RichText.svelte'
  import src from './utils/src.js'
  export let photos
</script>

<div class="u-container">
  <div class="cols">
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
    grid-gap: var(--space-block-sm) calc(var(--space-grid) * 2);
  }

  .col {
    width: 100%;
  }

  img,
  video {
    width: 100%;
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
  }
</style>
