<script>
  import RichText from './RichText.svelte'
  export let photos
</script>

<div class="u-container">
  <div class="cols">
    {#each photos as photo}
      <figure class="col">
        <img
          src={photo.image.url}
          alt={photo.image.url ? photo.image.url : ''} />
        <figcaption>
          <RichText size="sm" fields={photo.text} />
        </figcaption>
      </figure>
    {/each}
  </div>
</div>

<style>
  .cols {
    margin-top: var(--space-lg);
    display: flex;
    flex-wrap: wrap;
    grid-gap: var(--space-md) 4rem;
  }

  .col {
    width: 100%;
  }

  figcaption {
    margin-top: var(--space-sm);
  }

  @media (min-width: 1000px) {
    .cols {
      flex-wrap: nowrap;
    }
  }
</style>
