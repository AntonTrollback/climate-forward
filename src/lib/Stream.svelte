<script>
  import tz from 'date-fns-tz'
  import Link from './Link.svelte'
  import { current } from './Event.svelte'
  import Divider from './Divider.svelte'
  import SpeakerLink from './SpeakerLink.svelte'
  import RichText from './RichText.svelte'
  import { isSameDay, format } from 'date-fns'
  import { asDate, asText } from '@prismicio/helpers'

  const { formatInTimeZone } = tz

  export let source
  export let placeholder = []
  export let livetext
  export let nextuptext
  export let subtext = []

  const YOUTUBE_VIDEO =
    /https?:\/\/(?:www\.)?youtu(?:be\.com|\.be)\/(?:embed\/|watch\?v=)?(.+?)(?:\/|$|&|<)/

  $: id = source.match(YOUTUBE_VIDEO)?.[1]

  $: sessions =
    $current?.data.sessions
      .map((item) => item.session)
      .filter(
        (session) => session.id && !session.isBroken && session.data.is_streamed
      )
      .sort(
        (a, b) =>
          asDate(a.data.start_date_time) - asDate(b.data.start_date_time)
      ) || []

  $: live = sessions.find(function (session) {
    const start = asDate(session.data.start_date_time)
    const end = asDate(session.data.end_date_time)
    const now = Date.now()
    return start < now && end > now
  })

  $: next = sessions.find(function (session) {
    const start = asDate(session.data.start_date_time)
    const now = Date.now()
    return start > now
  })

  $: session = live || next

  $: speakers = session?.data.speakers.filter(
    (item) => item.speaker.id && !item.speaker.isBroken
  )

  $: mode = live
    ? 'live'
    : next && isSameDay(asDate(next.data.start_date_time), Date.now())
    ? 'before'
    : 'after'

  function getTimestamp(start, end) {
    const timezone = $current?.data.timezone || 'UTC'

    start = formatInTimeZone(start, timezone, 'h:mm aaaa')
    end = formatInTimeZone(end, timezone, 'h:mm aaaa')
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

    return `${start}–${end} ${$current?.data.timezone_name || 'G.M.T.'}`
  }

  function jump(event) {
    const { hash } = new URL(this.href)
    const offset = getComputedStyle(document.documentElement).getPropertyValue(
      '--scroll-offset'
    )
    const target = document.querySelector(hash)
    window.scrollTo({
      left: 0,
      behavior: 'smooth',
      top: target.offsetTop - offset
    })
    event.preventDefault()
  }

  // To-do: use whitespace util instead
  function fix(text) {
    return text.replace('New York', 'New&nbsp;York')
  }
</script>

<div class="Stream" id="live-stream">
  {#if mode === 'after'}
    <RichText fields={placeholder} size="xl" />
  {:else if id}
    <div class="Text Text--spaced Text--xl">
      <h2 class="Text-p">
        {#if mode === 'live'}
          {@html fix(livetext)}
        {:else}
          {@html fix(nextuptext)}
        {/if}
      </h2>
    </div>
    <div class="Text Text--spaced">
      <p class="Text-p u-spaceMd">
        <a href="#program" on:click={jump}>See the full program</a>
      </p>
    </div>
    <div class="Stream-container">
      <div class="Stream-aspect">
        <iframe
          class="Stream-player"
          src="https://www.youtube.com/embed/{id}?rel=0&modestbranding=1&autoplay=1"
          width="1920"
          height="1080"
          title="YouTube live stream video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
        {#if subtext}
          <div class="Stream-sub">
            <RichText fields={subtext} size="xs" />
          </div>
        {/if}
      </div>
      <article class="Stream-body">
        <div class="Stream-info">
          {#if session.data.format}
            <p>{session.data.format}</p>
          {/if}
          <div class="Text">
            <h3 class="Text-h4 u-spaceSm">{asText(session.data.name)}</h3>
          </div>
          <time
            class="Stream-time"
            class:is-live={mode === 'live'}
            datetime={asDate(session.data.start_date_time).toJSON()}>
            {live
              ? ''
              : `${format(
                  asDate(session.data.start_date_time),
                  'EEEE, MMMM d'
                )}, `}
            {getTimestamp(
              asDate(session.data.start_date_time),
              asDate(session.data.end_date_time)
            )}
          </time>
          <p>
            <Link class="u-trigger u-triggerBlock u-spaceMd" document={session}>
              <span>Learn more</span>
            </Link>
          </p>
        </div>
        {#if speakers?.length}
          <Divider size="md" />
          <h3 class="Text-h5">Speakers</h3>
          <ol>
            {#each speakers as item}
              <li class="item">
                <div class="body">
                  <SpeakerLink speaker={item.speaker} role={item.role} />
                </div>
              </li>
            {/each}
          </ol>
        {/if}
      </article>
    </div>
  {/if}
</div>

<style>
  .Stream-container {
    margin-top: var(--space-block-md);
    align-items: flex-start;
  }

  @media (min-width: 800px) {
    .Stream-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: calc(var(--space-grid) * 2);
    }
  }

  @media (min-width: 1300px) {
    .Stream-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .Stream-info {
    position: relative;
    margin-top: var(--space-md);
  }

  @media (min-width: 800px) {
    .Stream-info {
      margin-top: -0.2rem;
    }
  }

  .Stream-time {
    display: flex;
    align-items: baseline;
    margin-top: 0.5rem;
    white-space: nowrap;
  }

  .Stream-time.is-live::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    transform-origin: center;
    transform: scale(1);
    margin-right: 0.45rem;
    background-color: #eb3223;
    border-radius: 100%;
    box-shadow: 0 0 0 rgba(235, 50, 35, 0.5);
    animation: Stream-pulse 2700ms infinite;
  }

  @keyframes Stream-pulse {
    0% {
      box-shadow: 0 0 0 rgba(235, 50, 35, 0.5);
      transform: scale(1);
    }

    50% {
      box-shadow: 0 0 7px rgba(235, 50, 35, 0.3);
      transform: scale(1.1);
    }

    100% {
      box-shadow: 0 0 0 rgba(235, 50, 35, 0.5);
      transform: scale(1);
    }
  }

  /* Speakers */

  .item {
    position: relative;
    margin-top: 1rem;
  }

  /* Video aspect */

  .Stream-aspect {
    width: 100%;
    position: relative;
  }

  @media (min-width: 1300px) {
    .Stream-aspect {
      grid-column: 1 / 3;
    }
  }

  .Stream-aspect::before {
    content: '';
    display: block;
    padding-top: calc(100% * 9 / 16);
  }

  .Stream-player {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Stream-sub {
    position: absolute;
    top: calc(100% + var(--space-sm));
    display: none;
  }

  @media (min-width: 800px) {
    .Stream-sub {
      display: block;
    }
  }
</style>
