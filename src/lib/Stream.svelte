<script>
  import tz from 'date-fns-tz'
  import Link from './Link.svelte'
  import { current } from './Event.svelte'
  import src from './utils/src.js'
  import Divider from './Divider.svelte'
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
</script>

<div class="Stream">
  {#if mode === 'after'}
    <RichText fields={placeholder} size="xl" />
  {:else if id}
    <div class="Text Text--spaced Text--xl">
      <h2 class="Text-p">
        {#if mode === 'live'}
          Live On Stage
        {:else}
          Up Next at Climate Forward&nbsp;London
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
          src="https://www.youtube.com/embed/{id}?rel=0&modestbranding=1"
          width="1920"
          height="1080"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
      <article class="Stream-body">
        <div class="Stream-info">
          <p>{session.data.format}</p>
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
                  'eee., MMM. d'
                )}, `}
            {getTimestamp(
              asDate(session.data.start_date_time),
              asDate(session.data.end_date_time)
            )}
          </time>
          <p>
            <Link class="u-trigger u-triggerBlock u-spaceMd" document={session}>
              <span class="">Learn more</span>
            </Link>
          </p>
        </div>
        {#if speakers?.length}
          <Divider size="md" />
          <h3 class="Text-h5">Speakers</h3>
          <ol>
            {#each speakers as speaker}
              <li class="item">
                <div class="body">
                  <Link class="speaker" document={speaker}>
                    <img
                      sizes="2.875rem"
                      srcset="{src(
                        'c_fill,g_face,w_46,h_46/f_auto',
                        speaker.data.image.url
                      )} 46w,{src(
                        'c_fill,g_face,w_92,h_92/f_auto',
                        speaker.data.image.url
                      )} 92w,{src(
                        'c_fill,g_face,w_138,h_138/f_auto',
                        speaker.data.image.url
                      )} 138w"
                      src={src(
                        'c_fill,g_face,w_92,h_92/f_auto',
                        speaker.data.image.url
                      )}
                      width="92"
                      height="92"
                      alt="Portrait of {asText(speaker.data.name)}" />
                    <div>
                      <strong>{asText(speaker.data.name)}</strong>
                      {speaker.data.title}
                    </div>
                  </Link>
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

  :global(.Stream .speaker) {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.2;
    transition: opacity 250ms var(--ease-out);
    max-width: 25rem;
  }

  :global(.Stream .speaker:hover strong) {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.11em;
  }

  :global(.Stream .speaker:active) {
    opacity: 0.6;
    transition: none;
  }

  :global(.Stream .speaker strong) {
    display: block;
  }

  :global(.Stream .speaker img) {
    flex-shrink: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
    background: var(--current-color-placeholder);
  }

  /* Video aspect */

  .Stream-aspect {
    width: 100%;
    position: relative;
    overflow: hidden;
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
</style>
