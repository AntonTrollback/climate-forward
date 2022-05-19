<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import { gettext } from '$lib/utils/i18n.js'
  import RichText from '$lib/RichText.svelte'
  import { asText } from '@prismicio/helpers'
  import Link from '$lib/Link.svelte'

  export const text = gettext(translations)

  export let speaker
  export let sessions = null
  export let type = 'card'
</script>

<article class="Speaker Speaker--{type}">
    <figure class="portrait">
      {#if speaker.data.image?.url}
        <img src={speaker.data.image.url} alt="Portrait of {asText(speaker.data.name)}" />
      {/if}
    </figure>
    <div class="details">
      <h4 class="name">{asText(speaker.data.name)}</h4>
      <RichText fields={speaker.data.bio} />
      {#if type === 'link'}
        <Link class="u-spaceTopXs u-trigger u-triggerBlock" document={speaker}>{text`Learn more`}</Link>
      {/if}
      {#if sessions?.length}
        <h3>Speaking at</h3>
        <ul>
          {#each sessions as session}
            <li>
              <Link document={session}>
                <h3>{asText(session.data.name)}</h3>
              </Link>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
</article>

<style>
  .Speaker {
    display: flex;
    position: relative;
  }

  .portrait {
    flex: 0 0 8.5rem;
    margin-right: 1.5rem;
    transition: opacity 150ms var(--ease-out);
  }

  .Speaker--link:active .portrait {
    transition: none;
    opacity: 0.85;
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
    transition: opacity 150ms var(--ease-out);
  }

  .Speaker--link:active .details {
    transition: none;
    opacity: 0.6;
  }

  .name {
    width: 100%;
    font-size: 1.35rem;
    line-height: 1.05;
    letter-spacing: -0.01em;
    font-weight: 900;
    margin: 0 0 0.375rem 0;
  }

  .desc {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.1;
    letter-spacing: 0;
  }

  @media (min-width: 1000px) {
    .name {
      font-size: 1.625rem;
    }

    .desc {
      font-size: 1.5rem;
    }
  }
</style>
