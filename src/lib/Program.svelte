<script>
  import { language } from './utils/i18n.js'
  import Session, { getTimestamps } from './Session.svelte'
  import { format, parse } from 'date-fns'

  export let sessions

  $: days = sessions
    .reduce(function (days, session) {
      const { start: date } = getTimestamps(session)
      const datestamp = format(date, 'yyyy-MM-dd')
      let day = days.find((day) => day.date === datestamp)
      if (!day) {
        day = { date: datestamp, sessions: [session] }
        days.push(day)
      } else {
        day.sessions.push(session)
      }
      return days
    }, [])
    .sort((a, b) => a.date - b.date)
    .map(function ({ date, sessions }) {
      date = parse(date, 'yyyy-MM-dd', new Date())
      sessions = sessions.sort((a, b) => a.data.starts - b.data.starts)
      return { date, sessions }
    })
</script>

<ol class="Program">
  {#each days as day, index}
    <li>
      <details open={index === 0}>
        <summary>
          <h3 class="Text-h4">
            {day.date.toLocaleString($language, {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </h3>
        </summary>
        <ol class="grid">
          {#each day.sessions as session}
            <li class="item">
              <div class="body">
                <Session type="link" {session} />
              </div>
            </li>
          {/each}
        </ol>
      </details>
    </li>
  {/each}
</ol>

<style>
  .Program {
    --title-padding: 0.875rem;
    margin-top: var(--space-block-md);
  }

  summary {
    display: flex;
    align-items: center;
    -webkit-touch-callout: none;
    user-select: none;
    font-weight: 700;
    transition: opacity 350ms var(--ease-out);
    opacity: 1;
    cursor: pointer;
    border-top: 1px solid;
    padding: var(--title-padding) 0;
    margin-top: var(--space-block-sm);
  }

  summary:active {
    transition: none;
    opacity: 0.7;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::before {
    content: '';
    width: 1.6875rem;
    height: 1.6875rem;
    flex-shrink: 0;
    margin: -1px 0.75rem 0 -1px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' fill='none'%3E%3Ccircle cx='13.39' cy='13.75' r='13' fill='%23000'/%3E%3Cpath d='m8.44 11.7 4.95 4.94 4.95-4.95' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: transform 350ms var(--ease-out);
    transform-origin: center center;
  }

  details[open] > summary::before {
    transform: rotate(-0.5turn);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-grid);
    margin-top: calc(var(--space-block-sm) - var(--title-padding));
  }

  .item {
    position: relative;
    padding-bottom: var(--space-grid);
    border-bottom: 1px solid var(--current-color-border);
  }

  .body {
    position: relative;
    display: flex;
  }

  @media (min-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      column-gap: calc(var(--space-grid) * 2);
    }

    .body::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      top: 0;
      left: calc(var(--space-grid) * -1);
      background: var(--current-color-border);
    }
  }

  @media (max-width: 1299px) {
    .item:nth-child(odd) .body::before {
      content: none;
    }

    .item:nth-child(2n + 1):nth-last-child(-n + 2),
    .item:nth-child(2n + 1):nth-last-child(-n + 2) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  @media (min-width: 1300px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .item:nth-child(3n + 1) .body::before {
      content: none;
    }

    .item:nth-child(3n + 1):nth-last-child(-n + 3),
    .item:nth-child(3n + 1):nth-last-child(-n + 3) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
</style>
