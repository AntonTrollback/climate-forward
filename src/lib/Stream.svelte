<script>
  import tz from 'date-fns-tz'
  import Link from './Link.svelte'
  import { current } from './Event.svelte'
  import RichText from './RichText.svelte'
  import { isSameDay, format } from 'date-fns'
  import { asDate, asText } from '@prismicio/helpers'

  const { formatInTimeZone } = tz

  export let source
  export let placeholder = []

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

  $: speakers = session?.data.speakers
    .map((item) => item.speaker)
    .filter((speaker) => speaker.id && !speaker.isBroken)

  $: mode = live
    ? 'live'
    : next && isSameDay(asDate(next.data.start_date_time), Date.now())
    ? 'before'
    : 'after'

  function getTimestamp(start, end) {
    start = formatInTimeZone(start, 'UTC', 'h:mm aaaa')
    end = formatInTimeZone(end, 'UTC', 'h:mm aaaa')
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

    return `${start} – ${end} B.S.T.`
  }
</script>

<div class="Stream">
  {#if mode === 'after'}
    <RichText fields={placeholder} size="xl" />
  {:else if id}
    <div class="Text Text--spaced Text--xl">
      <h2 class="Text-p">
        {mode === 'live' ? 'Live from the stage' : 'Next up'}
      </h2>
    </div>
    <div class="Text Text--spaced">
      <p class="Text-p">
        <a href="#program">See the full program</a>
      </p>
    </div>
    <div class="Stream-container">
      <div class="Stream-aspect">
        <iframe
          class="Stream-player"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/{id}?rel=0&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
      <article class="Stream-body">
        <div class="Stream-info">
          <div class="Text">
            <p class="Text-p">{session.data.format}</p>
            <h3 class="Text-h3 u-spaceSm">{asText(session.data.name)}</h3>
          </div>
          <time
            class="Stream-time"
            class:is-live={mode === 'live'}
            datetime={asDate(session.data.start_date_time).toJSON()}>
            {live
              ? ''
              : `${format(
                  asDate(session.data.start_date_time),
                  'eee., MMM. d'
                )}, `}
            {getTimestamp(
              asDate(session.data.start_date_time),
              asDate(session.data.end_date_time)
            )}
          </time>
          <p>
            <Link document={session}>
              <span class="Stream-more"> Learn more </span>
            </Link>
          </p>
        </div>
        {#if speakers?.length}
          <h4 class="Stream-label">Speakers</h4>
          <ol>
            {#each speakers as speaker}
              <li class="Stream-speaker">
                <figure class="Stream-frame">
                  <img
                    class="Stream-image"
                    src={speaker.data.image.url}
                    width={speaker.data.image.dimensions.width}
                    height={speaker.data.image.dimensions.height}
                    alt="Portrait of {asText(speaker.data.name)}" />
                </figure>
                <Link document={speaker}>
                  <span class="Stream-link">
                    <strong class="Stream-person">
                      {asText(speaker.data.name)}
                    </strong>
                    <br />
                    {speaker.data.title}
                  </span>
                </Link>
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.75rem;
  }

  @media (min-width: 1000px) {
    .Stream-container {
      flex-direction: row;
    }
  }

  @media (min-width: 1200px) {
    .Stream-container {
      gap: 4rem;
    }
  }

  .Stream-body {
    flex: 0 0 100%;
    width: 100%;
    min-width: 18em;
  }

  @media (min-width: 1000px) {
    .Stream-body {
      width: 50%;
      flex: 0 0 50%;
    }
  }

  @media (min-width: 1200px) {
    .Stream-body {
      width: 36%;
      flex: 0 0 36%;
    }
  }

  .Stream-info {
    position: relative;
  }

  .Stream-format {
    display: block;
    margin-bottom: 0.5rem;
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

  .Stream-more {
    display: block;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color: var(--current-color-muted);
  }

  .Stream-info:hover .Stream-more {
    text-decoration: underline;
  }

  .Stream-more::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Stream-label {
    padding: 0.5rem 0;
    margin-top: 1.5rem;
    border-top: 1px solid var(--current-color-border);

    font-family: var(--doc-font-family);
    font-size: 1.5rem;
    line-height: 1.1em;
    letter-spacing: -0.01em;
    font-weight: 900;
    text-decoration-thickness: 1px !important;
    text-underline-offset: 0.1em;
    word-spacing: -0.03em;
  }

  .Stream-speaker {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.75rem;
    position: relative;
  }

  .Stream-frame {
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
  }

  .Stream-image {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    object-position: center;
    object-fit: cover;
  }

  .Stream-link {
    font-size: 0.9375rem;
  }

  .Stream-link::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .Stream-person {
    font-size: 1rem;
  }

  .Stream-speaker:hover .Stream-person {
    text-decoration: underline;
  }

  .Stream-aspect {
    flex: 1 1 25rem;
    position: relative;
    overflow: hidden;
  }

  .Stream-aspect::before {
    content: '';
    display: block;
    padding-top: calc(100% * 9 / 16);
  }

  @media (min-width: 1000px) {
    .Stream-aspect::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 3px solid #fff;
      pointer-events: none;
    }
  }

  .Stream-player {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
