<script>
  import Link from './Link.svelte'
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'

  export let speaker
  export let onclick = false
</script>

<div class="component">
  <img
    sizes="2.875rem"
    srcset="{src(
      'c_fill,g_face,w_46,h_46/f_auto',
      speaker.data.image.url
    )} 46w,{src(
      'c_fill,g_face,w_92,h_92/f_auto',
      speaker.data.image.url
    )} 92w,{src(
      'c_fill,g_face,w_138,h_138/f_auto',
      speaker.data.image.url
    )} 138w"
    src={src('c_fill,g_face,w_92,h_92/f_auto', speaker.data.image.url)}
    width="92"
    height="92"
    alt="Portrait of {asText(speaker.data.name)}" />
  <div>
    <strong>{asText(speaker.data.name)}</strong>
    {speaker.data.title}
    {#if onclick}
      <button
        class="u-trigger u-triggerBlock"
        data-slug={speaker.slug}
        on:click={onclick}>
        <span class="u-hiddenVisually">
          Learn more about {asText(speaker.data.name)}
        </span>
      </button>
    {:else}
      <Link class="u-trigger u-triggerBlock" document={speaker}>
        <span class="u-hiddenVisually">
          Learn more about {asText(speaker.data.name)}
        </span>
      </Link>
    {/if}
  </div>
</div>

<style>
  .component {
    display: flex;
    align-items: flex-start;
    font-size: 0.875rem;
    line-height: 1.2;
    transition: opacity 250ms var(--ease-out);
    max-width: 25rem;
  }

  .component:hover strong {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.11em;
  }

  .component:active {
    opacity: 0.6;
    transition: none;
  }

  .component strong {
    display: block;
  }

  .component img {
    flex-shrink: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
    background: var(--current-color-placeholder);
  }
</style>
