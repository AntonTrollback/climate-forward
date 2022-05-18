<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import { gettext } from '$lib/utils/i18n.js'
  import RichText from '$lib/RichText.svelte'
  import Link from '$lib/Link.svelte'

  export const text = gettext(translations)

  export let speaker
  export let sessions

  export let type = 'card'
</script>

<article class="Speaker--{type}">
  <RichText fields={speaker.data.name} />
  {#if type === 'link'}
    <Link document={speaker}>{text`Learn more`}</Link>
  {:else if sessions.length}
    <h3>Speaking at</h3>
    <ul>
      {#each sessions as session}
        <li>
          <Link document={session}>
            <RichText fields={session.data.name} />
          </Link>
        </li>
      {/each}
    </ul>
  {/if}
</article>
