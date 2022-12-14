<script>
  import Link from './Link.svelte'
  import src from './utils/src.js'
  export let items
</script>

<div class="Conversations">
  <div class="grid">
    {#each items as item}
      <div class="item {item.upcoming ? '' : 'play'}">
        <div class="body">
          <figure>
            <img
              alt={`Photo from the stage during the session "${item.image.url}"`}
              sizes="(min-width: 1000px) 16vw, 40vw"
              srcset="{src('w_300/f_auto', item.image.url)} 300w,{src(
                'w_400/f_auto',
                item.image.url
              )} 400w,{src('w_600/f_auto', item.image.url)} 600w,{src(
                'w_900/f_auto',
                item.image.url
              )} 900w"
              src={src('w_400/f_auto', item.image.url)}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height} />
          </figure>
          <strong class="Text-h5 u-spaceSm">{item.name}</strong>
          <Link class="u-trigger u-triggerBlock u-spaceSm" document={item.link}>
            {item.link_text ? item.link_text : 'Learn more'}
            <span class="u-hiddenVisually">: "{item.name}"</span>
          </Link>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .Conversations {
    margin-top: var(--space-block-sm);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--space-grid);
    column-gap: calc(var(--space-grid) * 2);
  }

  .item {
    display: flex;
    position: relative;
    padding-bottom: var(--space-grid);
    border-bottom: 1px solid var(--current-color-border);
  }

  .body {
    width: 100%;
    position: relative;
  }

  figure {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: calc(100% * 9 / 16);
    background: var(--current-color-placeholder);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .play figure::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.1);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
    background-size: 25% auto;
    background-position: center;
    background-repeat: no-repeat;
  }

  .body::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    left: calc(var(--space-grid) * -1);
    background: var(--current-color-border);
  }

  .item:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (min-width: 800px) and (max-width: 999px) {
    .item:nth-child(odd) .body::before {
      content: none;
    }

    .item:nth-child(2n + 1):nth-last-child(-n + 2),
    .item:nth-child(2n + 1):nth-last-child(-n + 2) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  @media (min-width: 1000px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .item:nth-child(4n + 1) .body::before {
      content: none;
    }

    .item:nth-child(4n + 1):nth-last-child(-n + 4),
    .item:nth-child(4n + 1):nth-last-child(-n + 4) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
</style>
