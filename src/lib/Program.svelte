<script>
  import { asDate } from '@prismicio/helpers'
  import { language } from './utils/i18n.js'
  import { format, parse, isSameDay, isBefore } from 'date-fns'
  import SessionCard from './SessionCard.svelte'

  export let sessions

  $: days = sessions
    // Create day groups
    .reduce(function (days, session, index) {
      const date = asDate(session.data.start_date_time)
      const datestamp = format(date, 'yyyy-MM-dd')
      let day = days.find((day) => day.date === datestamp)
      if (!day) {
        day = {
          date: datestamp,
          sessions: [session]
        }
        days.push(day)
      } else {
        day.sessions.push(session)
      }
      return days
    }, [])
    // Sort day groups
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    .map(function ({ date, sessions }) {
      date = parse(date, 'yyyy-MM-dd', new Date())
      sessions = sessions
        // Sort sessions
        .sort((a, b) => {
          if (a.data.start_date_time === b.data.start_date_time) {
            return (
              Date.parse(a.data.end_date_time) -
              Date.parse(b.data.end_date_time)
            )
          }
          return (
            Date.parse(a.data.start_date_time) -
            Date.parse(b.data.start_date_time)
          )
        })
        // Move sponsored sessions to the end of the day
        .sort((a, b) =>
          a.data.branding === b.data.branding ? 0 : a.data.branding ? 1 : -1
        )
      return { date, sessions }
    })
    // Set open state
    .map((day, index) => {
      if (isSameDay(asDate(day.date), Date.now())) day.open = true
      if (index < 1 && isBefore(Date.now(), asDate(day.date))) day.open = true
      return day
    })
</script>

<div class="component">
  {#if days.length > 1}
    {#each days as day}
      <div>
        <details open={day.open}>
          <summary>
            <h3 class="Text-h4">
              {day.date.toLocaleString($language, {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </h3>
          </summary>
          <ul class="grid">
            {#each day.sessions as session}
              <li class="item">
                <div class="body">
                  <SessionCard {session} />
                </div>
              </li>
            {/each}
          </ul>
        </details>
      </div>
    {/each}
  {:else}
    <ul class="grid">
      {#each days[0].sessions as session}
        <li class="item">
          <div class="body">
            <SessionCard {session} />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .component {
    --title-padding: 0.875rem;
    margin-top: var(--space-block-md);
  }

  summary {
    display: flex;
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
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

  details[open] {
    margin-bottom: var(--space-block-lg);
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

  .component > li:not(:last-child) .grid {
    margin-bottom: var(--space-block-md);
  }

  .item {
    display: flex;
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
