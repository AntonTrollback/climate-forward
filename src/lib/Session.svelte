<script>
  import tz from 'date-fns-tz'
  import src from './utils/src.js'
  import Link from './Link.svelte'
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

  export let type = 'card'
  export let simple = false
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

<article
  class="Session Session--{type}"
  class:Session--simple={simple}
  class:Session--partner={session.data.branding}>
  {#if type === 'link'}
    {#if !simple}
      {#if session.data.kicker && session.data.branding}
        <div class="kicker"><span>{session.data.kicker}</span></div>
      {:else}
        <span class="format"
          >{session.data.format ? session.data.format : '—'}</span>
      {/if}
    {/if}
    {#if simple && !session.data.kicker && !session.data.branding}
      {#if session.data.location}
        <span class="location">{session.data.location}</span>
      {/if}
    {/if}
    <div class="u-spaceXs">
      {#if simple}
        <Link class="simple-link u-triggerBlock" document={session}>
          <span class="u-hiddenVisually">
            Learn more about the session: {asText(session.data.name)}
          </span>
        </Link>
      {/if}
      <h4 class="Text-h4 title">
        {#if session.data.branding}
          <em>{asText(session.data.name)}</em>
        {:else}
          {asText(session.data.name)}
        {/if}
      </h4>
    </div>
    <div class="u-spaceXs">
      {#if simple}
        <time {datetime}>
          {#if simple}
            {day},
          {/if}
          {start ? `${start}–${end}` : end} B.S.T.
        </time>
      {:else}
        <time {datetime}>{start ? `${start}–${end}` : end} B.S.T.,</time>
        {#if session.data.location}
          <span class="location">{session.data.location}</span>
        {/if}
      {/if}
    </div>
    {#if !simple}
      <div>
        <Link class="u-spaceXs u-trigger u-triggerBlock" document={session}>
          Learn more
          <span class="u-hiddenVisually">
            about the session: {asText(session.data.name)}
          </span>
        </Link>
      </div>
    {/if}
  {:else}
    <div class="aside">
      <time class="wrap" {datetime}>
        <span>{day}</span>
        <span>{start ? `${start}–${end}` : end} B.S.T.</span>
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
        {:else if event?.data.link}
          <Button solid document={event.data.link}>
            {event.data.button_text}
          </Button>
        {/if}
      </div>

      {#if session.data.branding && hasSponsor}
        <div class="supporter">
          <p>{asText(session.data.smallprint)}</p>
          <Sponsor
            class="u-spaceSm"
            org={session.data.sponsor.data}
            size="md" />
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
          <span>{start ? `${start}–${end}` : end} B.S.T.</span>
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
        {:else if event?.data.link}
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
          <Sponsor
            class="u-spaceSm"
            org={session.data.sponsor.data}
            size="md" />
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
        </ul>
      </div>
    {/if}
  {/if}
</article>

<style>
  .Session--partner.Session--card {
    background: var(--current-color-ad);
    box-shadow: 0 0 0 1.5rem var(--current-color-ad);
  }

  @media (min-width: 500px) {
    .Session--partner.Session--card {
      box-shadow: 0 0 0 3rem var(--current-color-ad);
    }
  }

  @media (min-width: 1000px) {
    .Session--partner.Session--card {
      box-shadow: 0 0 0 3rem var(--current-color-ad);
    }
  }

  @media (min-width: 700px) {
    .Session--card {
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
    border-top: 1px solid var(--current-color-border);
  }

  .supporter p {
    max-width: 30em;
    font-size: 0.75rem;
    width: 90%;
  }

  /* Video aspect */

  .aspect {
    margin: 2.2rem 0;
    width: 100%;
    position: relative;
    overflow: hidden;
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
  }

  .Session--card .title {
    padding-right: 2rem;
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

  .Session--card .kicker {
    margin: 0.15rem 0 var(--space-sm);
    font-weight: 700;
    padding-right: 2rem;
  }

  @media (min-width: 700px) {
    .Session--card .kicker {
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

  :global(.Session .speaker) {
    display: flex;
    align-items: flex-start;
    font-size: 0.875rem;
    line-height: 1.2;
    transition: opacity 250ms var(--ease-out);
    max-width: 25rem;
  }

  :global(.Session .speaker:hover strong) {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.11em;
  }

  :global(.Session .speaker:active) {
    opacity: 0.6;
    transition: none;
  }

  :global(.Session .speaker strong) {
    display: block;
  }

  :global(.Session .speaker img) {
    flex-shrink: 0;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 1rem;
    background: var(--current-color-placeholder);
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
