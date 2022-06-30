<script>
  import Link from './Link.svelte'
  import { asText } from '@prismicio/helpers'

  export let sessions = []
  export let limit = 4

  $: sessionsWithVideo = sessions.filter((session) => session.data.video)
</script>

<div class="Previous">
  <div class="grid">
    {#each sessionsWithVideo.slice(0, limit) as session}
      <section class="item">
        <div class="body">
          <Link document={session}>
            <figure>
              <img
                alt={session.data.video.title}
                src={session.data.video.thumbnail_url}
                width={session.data.video.thumbnail_width}
                height={session.data.video.thumbnail_height} />
            </figure>
            <h4 class="Text-h5 u-spaceSm">{asText(session.data.name)}</h4>
            <span class="u-trigger u-triggerBlock u-spaceSm">Learn more</span>
          </Link>
        </div>
      </section>
    {/each}
    {#if sessionsWithVideo?.length > limit}
      <details>
        <summary class="u-expand">Show all</summary>
        <div class="grid">
          {#each sessionsWithVideo.slice(0, limit) as session, index}
            <section class="item">
              <div class="body">
                <Link document={session}>
                  <figure>
                    <img
                      alt={session.data.video.title}
                      src={session.data.video.thumbnail_url}
                      width={session.data.video.thumbnail_width}
                      height={session.data.video.thumbnail_height} />
                  </figure>
                  <h4 class="Text-h5 u-spaceSm">{asText(session.data.name)}</h4>
                  <span class="u-trigger u-triggerBlock u-spaceSm"
                    >Learn more</span>
                </Link>
              </div>
            </section>
          {/each}
        </div>
      </details>
    {/if}
  </div>
</div>

<style>
  .Previous {
    margin-top: var(--space-block-md);
  }

  summary {
    margin-top: calc(var(--space-grid) * -1 - 1px);
    padding-top: 0.5rem;
    border-top: 1px solid var(--current-color-border);
  }

  details[open] summary {
    display: none;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--space-grid);
    column-gap: calc(var(--space-grid) * 2);
  }

  .grid details {
    grid-column: span 2;
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
    display: flex;
  }

  :global(.body > a) {
    display: block;
    width: 100%;
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

  figure::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.1);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
    background-size: 2rem auto;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 400px) {
    figure::after {
      background-size: 3rem auto;
    }
  }

  @media (min-width: 800px) {
    figure::after {
      background-size: 2rem auto;
    }
  }

  @media (min-width: 1000px) {
    figure::after {
      background-size: 3rem auto;
    }
  }

  @media (min-width: 1000px) {
    figure::after {
      background-size: 4rem auto;
    }
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

  @media (max-width: 999px) {
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

    .grid details {
      grid-column: span 4;
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
