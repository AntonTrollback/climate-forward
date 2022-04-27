<script context="module">
  export const query = `
    {
      ...on rich_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on speakers {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          speaker {
            ...speakerFields
          }
        }
      }
      ...on program {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          session {
            ...sessionFields
          }
        }
      }
    }
  `
</script>

<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'
  import Speaker from '$lib/Speaker.svelte'
  import Program from '$lib/Program.svelte'
  import Link from '$lib/Link.svelte'

  export let slices
</script>

{#each slices as slice, index}
  <div id="{slice.primary.slice_id || `${slice.slice_type}-${index}`}">
    {#if slice.slice_type === 'events'}
      <ol>
        {#each slice.items.filter((item) => !item.event.isBroken) as item}
          <li>
            <Link document={item.event}>{item.event.uid}</Link>
          </li>
        {/each}
      </ol>
    {/if}
    {#if slice.slice_type === 'rich_text'}
      {@html asHTML(slice.primary.text, resolve)}
    {/if}
    {#if slice.slice_type === 'speakers'}
      {@html asHTML(slice.primary.heading)}
      {@html asHTML(slice.primary.text, resolve)}
      <ol>
        {#each slice.items
          .map((item) => item.speaker)
          .filter((speaker) => !speaker.isBroken) as speaker}
          <li>
            <Speaker type="link" speaker={speaker} />
          </li>
        {/each}
      </ol>
    {/if}
    {#if slice.slice_type === 'program'}
      {@html asHTML(slice.primary.heading)}
      {@html asHTML(slice.primary.text, resolve)}
      <Program sessions={slice.items
        .map((item) => item.session)
        .filter((session) => !session.isBroken)} />
    {/if}
  </div>
{/each}
