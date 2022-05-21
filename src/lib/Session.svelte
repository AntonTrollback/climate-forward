<script context="module">
  import { parseJSON } from 'date-fns'

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

  export function getTimestamps(session) {
    const { data } = session
    const start =
      asDate(data.start_date_time) ||
      parseJSON(
        `${data.swoogo_session.date}T${data.swoogo_session.start_time}.000Z`
      )
    const end =
      asDate(data.end_date_time) ||
      parseJSON(
        `${data.swoogo_session.date}T${data.swoogo_session.end_time}.000Z`
      )

    return { start, end }
  }
</script>

<script>
  import tz from 'date-fns-tz'
  import { asText } from '@prismicio/helpers'
  import { asDate } from '@prismicio/helpers'
  import Link from '$lib/Link.svelte'

  const { formatInTimeZone } = tz

  export let type = 'card'
  export let session

  const { start, end } = getTimestamps(session)
</script>

<article class="Speaker Speaker--{type}">
  <h1>{asText(session.data.name)}</h1>
  <time datetime={start.toJSON()}>
    {formatInTimeZone(start, 'UTC', 'HH.mm a')} – {formatInTimeZone(
      end,
      'UTC',
      'HH.mm a'
    )}<br />
    {formatInTimeZone(start, 'UTC', 'MMM., d, yyyy')}
  </time>
  {#if type === 'link'}
    <Link document={session}>Learn more</Link>
  {:else}
    <h3>Speakers</h3>
    <ul>
      {#each session.data.speakers as item}
        <li>
          <Link document={item.speaker}>{asText(item.speaker.data.name)}</Link>
        </li>
      {/each}
    </ul>
  {/if}
</article>
