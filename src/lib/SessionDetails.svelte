<script>
  import tz from 'date-fns-tz'
  import SpeakerLink from './SpeakerLink.svelte'
  import Button from './Button.svelte'
  import Sponsor from './Sponsor.svelte'
  import Divider from './Divider.svelte'
  import RichText from './RichText.svelte'
  import { createEventDispatcher } from 'svelte'
  import { asText, asDate } from '@prismicio/helpers'

  const dispatch = createEventDispatcher()
  const { formatInTimeZone } = tz

  const YOUTUBE_VIDEO =
    /https?:\/\/(?:www\.)?youtu(?:be\.com|\.be)\/(?:embed\/|watch\?v=)?(.+?)(?:\/|$|&|<)/

  export let event = null
  export let session

  $: hasSponsor = session.data.sponsor?.id && !session.data.sponsor.isBroken

  let start, end
  $: {
    start = formatInTimeZone(
      asDate(session.data.start_date_time),
      'UTC',
      'h:mm aaaa'
    )
    end = formatInTimeZone(
      asDate(session.data.end_date_time),
      'UTC',
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
  }

  $: isPast = asDate(session.data.end_date_time) - 1000 * 60 * 60 < Date.now()

  $: isLive =
    asDate(session.data.start_date_time) - 1000 * 60 * 60 < Date.now() &&
    asDate(session.data.end_date_time) - 1000 * 60 * 60 > Date.now()

  $: day = formatInTimeZone(
    asDate(session.data.start_date_time),
    'UTC',
    'EEEE, LLLL d'
  )
  $: datetime = asDate(session.data.start_date_time).toJSON()

  let speakers = session.data.speakers
    .filter((item) => item.speaker.id)
    .map((item) => item.speaker)
  if (!speakers.length) speakers = null

  function jump(event) {
    dispatch('close')
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

<article class="component" class:external={session.data.branding}>
  <div class="aside">
    <time class="wrap" {datetime}>
      <span>{day}</span>
      {#if !session.data.timeless}
        <span>{start ? `${start}–${end}` : end} B.S.T.</span>
      {/if}
    </time>
    <span class="wrap">
      {#if session.data.location}
        <span class="location">{session.data.location}</span>
      {/if}
      {#if session.data.format}
        <span class="format">{session.data.format}</span>
      {/if}
    </span>

    {#if !session.data.branding && hasSponsor}
      <span class="wrap">
        <div class="sponsor">
          {#if session.data.show_logo}
            <Sponsor
              class="u-spaceSm"
              org={session.data.sponsor.data}
              label={session.data.kicker}
              size="md" />
          {:else}
            {session.data.kicker}<br />
            {asText(session.data.sponsor.data.name)}
          {/if}
        </div>
      </span>
    {/if}

    <div class="wrap button">
      {#if isLive}
        <Button solid theme="highlight" href="#live-stream" onclick={jump}>
          <svg
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            class="live"
            fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
          Live now
        </Button>
      {:else if session.data.link?.url}
        <Button solid href={session.data.link.url} target="_blank">
          {session.data.button_text}
        </Button>
      {:else if event?.data.link && !isPast}
        <Button solid document={event.data.link}>
          {event.data.button_text}
        </Button>
      {/if}
    </div>

    {#if session.data.branding && hasSponsor}
      <div class="supporter">
        <p>{asText(session.data.smallprint)}</p>
        <Sponsor class="u-spaceMd" org={session.data.sponsor.data} size="md" />
      </div>
    {/if}
  </div>

  <div class="main">
    {#if session.data.kicker && session.data.branding}
      <div class="kicker">{session.data.kicker}</div>
    {/if}

    <h2 class="Text-h3 title">
      {#if session.data.branding}
        <em>{asText(session.data.name)}</em>
      {:else}
        {asText(session.data.name)}
      {/if}
    </h2>

    {#if session.data.video?.embed_url}
      <div class="aspect">
        <iframe
          class="player"
          src={`https://www.youtube.com/embed/${
            session.data.video.embed_url.match(YOUTUBE_VIDEO)?.[1]
          }?rel=0&modestbranding=1`}
          width="1920"
          height="1080"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>
    {/if}

    <div class="meta">
      <time class="wrap" {datetime}>
        <span>{day}</span>
        {#if !session.data.timeless}
          <span>{start ? `${start}–${end}` : end} B.S.T.</span>
        {/if}
      </time>
      <span class="wrap">
        {#if session.data.location}
          <span class="location">{session.data.location}</span>
        {/if}
        {#if session.data.format}
          <span class="format">{session.data.format}</span>
        {/if}
      </span>
    </div>

    {#if session.data.description?.length}
      <RichText class="u-spaceMd" fields={session.data.description} />
    {/if}

    <div class="button">
      {#if isLive}
        <Button solid theme="highlight" href="#live-stream" onclick={jump}>
          <svg
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            class="live"
            fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
          Live now
        </Button>
      {:else if session.data.link?.url}
        <Button solid href={session.data.link.url} target="_blank">
          {session.data.button_text}
        </Button>
      {:else if event?.data.link && !isPast}
        <Button solid document={event.data.link}>
          {event.data.button_text}
        </Button>
      {/if}
    </div>

    {#if !session.data.branding && hasSponsor}
      <div class="sponsor">
        {#if session.data.show_logo}
          <Sponsor
            class="u-spaceSm"
            org={session.data.sponsor.data}
            label={session.data.kicker}
            size="md" />
        {:else}
          {session.data.kicker}<br />
          {asText(session.data.sponsor.data.name)}
        {/if}
      </div>
    {/if}

    {#if session.data.branding && hasSponsor}
      <div class="supporter">
        <p>{asText(session.data.smallprint)}</p>
        <Sponsor class="u-spaceSm" org={session.data.sponsor.data} size="md" />
      </div>
    {/if}
  </div>

  {#if speakers?.length}
    <div class="speakers {speakers.length < 3 ? 'inline' : ''}">
      <Divider size="md" />
      <h3 class="Text-h5">Speakers</h3>
      <ul class="grid">
        {#each speakers as speaker}
          <li class="item">
            <div class="body">
              <SpeakerLink {speaker} />
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</article>

<style>
  .external {
    background: var(--current-color-ad);
    box-shadow: 0 0 0 1.5rem var(--current-color-ad);
  }

  @media (min-width: 500px) {
    .external {
      box-shadow: 0 0 0 3rem var(--current-color-ad);
    }
  }

  @media (min-width: 1000px) {
    .external {
      box-shadow: 0 0 0 3rem var(--current-color-ad);
    }
  }

  @media (min-width: 700px) {
    .component {
      display: grid;
      grid-template-columns: 13.35rem 1fr 1fr;
      grid-gap: 0 2rem;
    }

    .main {
      grid-column: 2 / 4;
    }
  }

  .meta {
    margin: var(--space-md) 0;
    font-size: 0.875rem;
  }

  .meta time {
    font-weight: 700;
  }

  .wrap {
    display: block;
  }

  .wrap > * {
    white-space: nowrap;
    margin-right: 1rem;
    line-height: 1.3;
  }

  .aside {
    display: none;
  }

  .button {
    margin: var(--space-sm) 0;
  }

  .live {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin: -0.25rem 0.2rem -0.25rem -0.2rem;
  }

  .sponsor {
    font-size: 0.875rem;
  }

  .supporter {
    padding: var(--space-sm) 0 0;
    margin-top: 2rem;
    width: 82%;
    border-top: 1px solid var(--current-color-border);
  }

  .supporter p {
    max-width: 30em;
    font-size: 0.75rem;
  }

  .aspect {
    margin: 2.2rem 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: black;
  }

  .aspect::before {
    content: '';
    display: block;
    padding-top: calc(100% * 9 / 16);
  }

  .player {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 700px) {
    .meta {
      display: none;
    }

    .sponsor,
    .supporter,
    .button {
      display: none;
      font-size: inherit;
    }

    .aside,
    .aside .sponsor,
    .aside .supporter,
    .aside .button {
      display: block;
    }

    .aside {
      margin-top: 0.15rem;
    }

    .aside span + span {
      display: block;
      margin: 0;
    }

    .aside .wrap + .wrap {
      margin-top: var(--space-md);
    }

    .aside time {
      font-weight: 700;
    }

    .aside .button {
      margin: var(--space-xl) 0 !important;
    }
  }

  .title {
    max-width: 17em;
    padding-right: 2rem;
  }

  .kicker {
    margin: 0.15rem 0 var(--space-sm);
    font-weight: 700;
    font-size: 0.875rem;
    padding-right: 2rem;
  }

  @media (min-width: 700px) {
    .kicker {
      font-size: 1rem;
    }
  }

  /* Speaker grid */

  .speakers {
    width: 100%;
    grid-column: 1 / 4;
  }

  .speakers.inline {
    grid-column: 2 / 4;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-top: 1.5rem;
  }

  .item {
    position: relative;
  }

  @media (min-width: 500px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .grid .item:only-child {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .grid .item:only-child {
      grid-column: 1 / 4;
    }

    .speakers.inline .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 900px) {
    .grid {
      grid-gap: 1rem 2rem;
    }
  }
</style>
