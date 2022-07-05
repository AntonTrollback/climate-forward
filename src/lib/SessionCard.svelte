<script>
  import tz from 'date-fns-tz'
  import Link from './Link.svelte'
  import { current } from './Event.svelte'
  import { asText, asDate } from '@prismicio/helpers'

  const { formatInTimeZone } = tz

  export let simple = false
  export let session

  $: timezone = $current?.data.timezone || 'UTC'
  $: timezoneName = $current?.data.timezone_name || 'G.M.T.'

  let start, end, datetime
  $: {
    start = formatInTimeZone(
      asDate(session.data.start_date_time),
      timezone,
      'h:mm aaaa'
    )
    end = formatInTimeZone(
      asDate(session.data.end_date_time),
      timezone,
      'h:mm aaaa'
    )
    start = start.replace('12:00 p.m.', 'Noon')
    end = end.replace('12:00 p.m.', 'Noon')
    start = start.replace(':00', '')
    end = end.replace(':00', '')
    if (start === end) start = ''
    if (start.includes('a.m.') && end.includes('a.m.')) {
      start = start.replace(' a.m.', '')
    }
    if (start.includes('p.m.') && end.includes('p.m.')) {
      start = start.replace(' p.m.', '')
    }

    datetime = formatInTimeZone(
      asDate(session.data.start_date_time),
      timezone,
      'LLLL d'
    )

    if (session.data.timeless) {
      datetime = formatInTimeZone(
        asDate(session.data.start_date_time),
        timezone,
        'LLLL d'
      )
    } else {
      datetime = `${start ? `${start}–${end}` : end} ${timezoneName}`
    }
  }

  let sup, sub, highlight
  $: {
    sup = session.data.format ? session.data.format : ''
    if (simple) sup = session.data.location
    if (session.data.kicker) sup = session.data.kicker

    sub = datetime
    if (session.data.location) sub = `${datetime}, ${session.data.location}`

    highlight = session.data.kicker && session.data.branding
  }
</script>

<div class="component">
  <div class={highlight ? 'kicker' : ''}><span>{sup}</span></div>
  <div class="u-spaceXs">
    <strong class="Text-h4 title">
      {#if session.data.branding}
        <em>{asText(session.data.name)}</em>
      {:else}
        {asText(session.data.name)}
      {/if}
    </strong>
  </div>
  <div class="u-spaceXs">{sub}</div>

  {#if !simple}
    <div>
      <Link class="u-spaceXs u-trigger u-triggerBlock" document={session}>
        Learn more
        <span class="u-hiddenVisually">
          about the session "{asText(session.data.name)}"
        </span>
      </Link>
    </div>
  {/if}
</div>

<style>
  .title {
    max-width: 17em;
  }

  :global(.simple-link:hover + .title) {
    text-decoration: underline;
  }

  :global(.simple-link:focus-visible + .title) {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
  }

  .kicker {
    margin: -0.1rem -0.5rem -0.21rem;
    font-size: 0.875rem;
  }

  .kicker span {
    display: inline-block;
    background: var(--doc-color-ad);
    padding: 0.25rem 0.5rem;
  }
</style>
