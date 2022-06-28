<script>
  import RichText from './RichText.svelte'
  import src from './utils/src.js'
  export let photos
</script>

<div class="u-container">
  <div class="cols">
    {#each photos as photo}
      <figure class="col">
        <img
          sizes="80vw, (min-width: 1000px) 40vw"
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
        <figcaption>
          <RichText size="sm" fields={photo.text} />
        </figcaption>
      </figure>
    {/each}
  </div>
</div>

<style>
  .cols {
    margin-top: var(--space-block-md);
    display: flex;
    flex-wrap: wrap;
    grid-gap: var(--space-block-sm) 4rem;
  }

  .col {
    width: 100%;
  }

  figcaption {
    margin-top: var(--space-md);
  }

  @media (min-width: 1000px) {
    .cols {
      flex-wrap: nowrap;
    }
  }
</style>
