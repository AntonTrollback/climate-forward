<script context="module">
  export const translations = {
    en: {}
  }

  export const graphQuery = `
    {
      ...sessionFields
      speakers {
        speaker {
          ...on speaker {
            ...speakerFields
          }
        }
      }
    }
  `
</script>

<script>
  import RichText from '$lib/RichText.svelte'
  import { gettext } from '$lib/i18n.js'
  import Link from '$lib/Link.svelte'

  export const text = gettext(translations)

  export let session

  /** @type {'card'|'link'} */
  export let type = 'card'
</script>

<article class="Speaker--{type}">
  <RichText fields={session.data.name} />
  {#if type === 'link'}
    <Link document={session}>{text`Learn more`}</Link>
  {:else}
    <h3>Speakers</h3>
    <ul>
      {#each session.data.speakers as item}
        <li>
          <Link document={item.speaker}>
            <RichText fields={item.speaker.data.name} />
          </Link>
        </li>
      {/each}
    </ul>
  {/if}
</article>
