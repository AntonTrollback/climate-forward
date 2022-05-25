<script context="module">
  import { parseJSON } from 'date-fns'
  import { asDate } from '@prismicio/helpers'

  export const graphQuery = `
    {
      ...sessionFields
      sponsor {
        ...on sponsor {
          ...sponsorFields
        }
      }
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
  import Link from './Link.svelte'
  import RichText from './RichText.svelte'
  import Sponsor from './Sponsor.svelte'
  import Button from './Button.svelte'
  import Divider from './Divider.svelte'

  const { formatInTimeZone } = tz

  export let type = 'card'
  export let simple = false
  export let session

  $: hasSponsor = session.data.sponsor?.id && !session.data.sponsor.isBroken

  let { start, end } = getTimestamps(session)

  let day = formatInTimeZone(start, 'UTC', 'EEEE, LLLL d')

  let datetime = start.toJSON()
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
  let speakers = session.data.speakers
    .filter((item) => item.speaker.id)
    .map((item) => item.speaker)
  if (!speakers.length) speakers = null
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
    <div class="u-spaceTopXs">
      {#if simple}
        <Link class="simple-link u-triggerBlock" document={session}>
          <span class="u-hiddenVisually"
            >Learn more about the session: {asText(session.data.name)}</span>
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
      <time {datetime}>{start ? `${start}–${end}` : end} B.S.T.</time>
      {#if session.data.location}
        <span class="location">{session.data.location}</span>
      {/if}
    </div>
    {#if !simple}
      <div>
        <Link class="u-spaceTopXs u-trigger u-triggerBlock" document={session}>
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
            {session.data.kicker}<br />
            {asText(session.data.sponsor.data.name)}
          </div>
        </span>
      {/if}

      <div class="wrap button">
        {#if session.data.link?.url}
          <Button
          solid
          href={session.data.link.url}
          target="_blank">{session.data.button_text}</Button>
        {:else}
          <Button
            solid
            href="https://nytuk.swoogo.com/climate-forward-london/tickets"
            target="_blank">Get tickets</Button>
        {/if}
      </div>

      {#if session.data.branding && hasSponsor}
        <div class="supporter">
          <Divider size="sm" />
          <p>{asText(session.data.smallprint)}</p>
          <Sponsor org={session.data.sponsor.data} inline size="md" />
        </div>
      {/if}
    </div>

    <div class="main">
      {#if session.data.kicker && session.data.branding}
        <div class="kicker">{session.data.kicker}</div>
      {/if}
      <h2 class="Text-h3 Text-single title">
        {#if session.data.branding}
          <em>{asText(session.data.name)}</em>
        {:else}
          {asText(session.data.name)}
        {/if}
      </h2>

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
        <RichText fields={session.data.description} />
      {/if}

      <div class="button">
        {#if session.data.link?.url}
          <Button
          solid
          href={session.data.link.url}
          target="_blank">{session.data.button_text}</Button>
        {:else}
          <Button
            solid
            href="https://nytuk.swoogo.com/climate-forward-london/tickets"
            target="_blank">Get tickets</Button>
        {/if}
      </div>

      {#if !session.data.branding && hasSponsor}
        <div class="sponsor">
          {session.data.kicker}<br />
          {asText(session.data.sponsor.data.name)}
        </div>
      {/if}

      {#if session.data.branding && hasSponsor}
        <div class="supporter">
          <Divider size="sm" />
          <p>{asText(session.data.smallprint)}</p>
          <Sponsor org={session.data.sponsor.data} inline size="md" />
        </div>
      {/if}
    </div>

    {#if speakers?.length}
      <div class="speakers">
        <Divider size="md" />
        <h3 class="Text-h5">Speakers</h3>
        <ul class="grid">
          {#each speakers as speaker}
            <li class="item">
              <div class="body">
                <Link class="speaker" document={speaker}>
                  <img
                    src={speaker.data.image.url}
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
      box-shadow: 0 0 0 2rem var(--current-color-ad);
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
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 2rem;
    }

    .main {
      grid-column: 2 / 4;
    }
  }

  .meta {
    margin: var(--space-xs) 0;
    font-size: 0.875rem;
  }

  .meta time {
    font-weight: 700;
  }

  .wrap {
    display: block;
    white-space: nowrap;
  }

  .wrap span + span {
    margin-left: 1rem;
  }

  .aside {
    display: none;
  }

  .button {
    margin: var(--space-sm) 0;
  }

  .sponsor {
    font-size: 0.875rem;
  }

  .supporter p {
    max-width: 30em;
    font-size: 0.75rem;
    width: 80%;
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
      margin-top: var(--space-xs);
    }

    .aside time {
      font-weight: 700;
    }

    .aside .button {
      margin: var(--space-sm) 0 !important;
    }
  }

  .title {
    max-width: 17em;
  }

  .Session--card .title {
    padding-right: 2rem;
  }

  @media (min-width: 700px) {
    .Session--card .title {
      padding-bottom: var(--space-xs);
    }
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

  .Session--card .kicker {
    margin: 0.15rem 0 var(--space-xs);
    font-weight: 700;
    padding-right: 2rem;
  }

  /* Speaker grid */

  .speakers {
    width: 100%;
    grid-column: 1 / 4;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-top: 1.5rem;
  }

  .item {
    position: relative;
  }

  :global(.Session .speaker) {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.2;
    transition: opacity 250ms var(--ease-out);
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
  }

  @media (min-width: 450px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
