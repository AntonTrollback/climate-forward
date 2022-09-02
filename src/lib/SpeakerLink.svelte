<script>
  import Link from './Link.svelte'
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'

  export let speaker
  export let role = null
  export let large = false
  export let onclick = false
</script>

<div
  class="component {large ? 'large' : ''} {speaker.data.bio ? 'linked' : ''}">
  <img
    sizes={large ? '(min-width: 1100px) 4rem, 2.875rem' : '2.875rem'}
    srcset="{src(
      'c_fill,g_face,w_46,h_46/f_auto,q_100',
      speaker.data.image.url
    )} 46w,{src(
      'c_fill,g_face,w_92,h_92/f_auto,q_100',
      speaker.data.image.url
    )} 92w,{src(
      'c_fill,g_face,w_138,h_138/f_auto,q_100',
      speaker.data.image.url
    )} 138w,{src(
      'c_fill,g_face,w_192,h_192/f_auto,q_100',
      speaker.data.image.url
    )} 192w,{src(
      'c_fill,g_face,w_256,h_256/f_auto,q_100',
      speaker.data.image.url
    )} 256w"
    src={src('c_fill,g_face,w_92,h_92/f_auto,q_100', speaker.data.image.url)}
    width="92"
    height="92"
    alt="Portrait of {asText(speaker.data.name)}" />
  <div class="body">
    <strong>{asText(speaker.data.name)}</strong>
    {#if role}<span class="role">{role}</span>{/if}
    {speaker.data.title}
    {#if speaker.data.bio}
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

  @media (min-width: 1100px) {
    .large {
      font-size: 1rem;
    }
  }

  .component:focus-within:has(:focus-visible) {
    outline: solid var(--focus-ring-width);
    outline-color: var(--focus-ring-color);
  }

  :global(.component:focus-within a:focus-visible) {
    outline: 0 !important;
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

  .body {
    align-self: center;
    margin-top: -0.1em;
  }

  strong {
    display: block;
  }

  .role {
    display: block;
    color: var(--current-color-muted);
  }

  img {
    flex-shrink: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
    background: var(--current-color-placeholder);
  }

  @media (min-width: 1100px) {
    .large img {
      width: 4rem;
      height: 4rem;
    }
  }
</style>
