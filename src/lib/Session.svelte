<script context="module">
  import { parseJSON } from 'date-fns'
  import { asDate } from '@prismicio/helpers'

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
  import Link from '$lib/Link.svelte'

  const { formatInTimeZone } = tz

  export let type = 'card'
  export let simple = false
  export let session

  let { start, end } = getTimestamps(session)

  let datetime = start.toJSON()
  start = formatInTimeZone(start, 'UTC', 'h:mm bbbb')
  end = formatInTimeZone(end, 'UTC', 'h:mm bbbb')
  if (start.includes('a.m.') && end.includes('a.m.'))
    start = start.replace(' a.m.', '')
  if (start.includes('p.m.') && end.includes('p.m.'))
    start = start.replace(' p.m.', '')
  start = start.replace(':00', '')
  end = end.replace(':00', '')

  let speakers = session.data.speakers
    .filter((item) => item.speaker.id)
    .map((item) => item.speaker)
  if (!speakers.length) speakers = null
</script>

<article
  class="Session Session--{type} {simple ? 'Session--simple' : ''} {session.data
    .branding
    ? 'Session--partner'
    : ''}">
  {#if type === 'link'}
    {#if !simple}
      {#if session.data.kicker && session.data.branding}
        <div class="kicker"><span>{session.data.kicker}</span></div>
      {:else}
        <span class="format"
          >{session.data.format ? session.data.format : '—'}</span>
      {/if}
    {/if}
    <div class="u-spaceTopXs">
      {#if simple}
        <Link class="simple-link u-triggerBlock" document={session}>
          <span class="u-hiddenVisually">Learn more</span>
        </Link>
      {/if}
      <h4 class="Text-h4 Text-single title">
        {#if session.data.branding}
          <em>{asText(session.data.name)}</em>
        {:else}
          {asText(session.data.name)}
        {/if}
      </h4>
    </div>
    <div class="u-spaceTopXs">
      <time {datetime}>{start}–{end} B.S.T.</time>
      <span class="location">{session.data.location}</span>
    </div>
    {#if !simple}
      <div>
        <Link class="u-spaceTopXs u-trigger u-triggerBlock" document={session}
          >Learn more</Link>
      </div>
    {/if}
  {:else}
    <h3 class="Text-h3 Text-single title">
      {#if session.data.branding}
        <em>{asText(session.data.name)}</em>
      {:else}
        {asText(session.data.name)}
      {/if}
    </h3>
    {#if speakers}
      <h3>Speakers</h3>
      <ul>
        {#each speakers as speaker}
          <li>
            <Link document={speaker}>{asText(speaker.data.name)}</Link>
          </li>
        {/each}
      </ul>
    {/if}
  {/if}
</article>

<style>
  .Session--link {
    transition: opacity 150ms var(--ease-out);
  }

  .Session--link:active {
    transition: none;
    opacity: 0.6;
  }

  time,
  .location {
    font-size: 0.9375rem;
  }

  time {
    margin-right: 1rem;
    white-space: nowrap;
  }

  .location {
    white-space: nowrap;
  }

  .title {
    max-width: 23em;
  }

  :global(.simple-link:hover + .title) {
    text-decoration: underline;
  }

  .kicker {
    margin: -0.1rem -0.5rem -0.21rem;
  }

  .kicker span {
    display: inline-block;
    background: var(--doc-color-ad);
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
</style>
