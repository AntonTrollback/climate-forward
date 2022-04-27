<script context="module">
  export const translations = {
    en: {

    }
  }
</script>

<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import { gettext, language } from '$lib/i18n.js'
  import Link from '$lib/Link.svelte'

  export const text = gettext(translations)

  export let speaker

  /** @type {'card'|'link'} */
  export let type = 'card'
</script>

<article class="Speaker--{type}">
  {@html asHTML(speaker.data.name)}
  {#if type === 'link'}
    <Link document={speaker}>{text`Learn more`}</Link>
  {/if}
</article>
