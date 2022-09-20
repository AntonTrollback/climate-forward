<script>
  import tz from 'date-fns-tz'
  import Link from './Link.svelte'
  import { current } from './Event.svelte'
  import { asText, asDate } from '@prismicio/helpers'

  const { formatInTimeZone } = tz

  export let session
  export let showdate
  export let past = false

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
      'EEE, LLLL d'
    )

    if (showdate) {
      datetime = `${datetime}, ${
        start ? `${start}–${end}` : end
      } ${timezoneName}`
    } else {
      datetime = `${start ? `${start}–${end}` : end} ${timezoneName}`
    }

    if (session.data.timeless) datetime = null
  }

  let sup, sub, highlight
  $: {
    sup = ''
    if (session.data.kicker && session.data.branding) {
      sup = session.data.kicker
    } else {
      if (session.data.format) sup = session.data.format
    }

    sub = ''
    if (datetime) sub = datetime
    if (session.data.is_streamed) sub = `${sub} (streaming&nbsp;live)`
    if (session.data.location) {
      if (sub) sub = sub + ', ' + session.data.location
      if (!sub) sub = session.data.location
    }

    highlight = session.data.kicker && session.data.branding

    if (past) sub = null
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
  {#if sub}
    <div class="u-spaceXs sub">{@html sub}</div>
  {/if}

  {#if !session.data.unlinked}
    <div class="action">
      <Link class="u-spaceSm u-trigger u-triggerBlock" document={session}>
        {#if session.data.link_text}
          {session.data.link_text}<span class="u-hiddenVisually"
            >, for the session "{asText(session.data.name)}"</span>
        {:else}
          Learn more <span class="u-hiddenVisually"
            >about the session "{asText(session.data.name)}"</span>
        {/if}
      </Link>
    </div>
  {/if}
</div>

<style>
  .title {
    max-width: 17em;
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
