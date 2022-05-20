<script>
  import { language } from '$lib/utils/i18n.js'
  import Session, { getTimestamps } from '$lib/Session.svelte'
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
  {#each days as day}
    <li>
      <h3>
        {day.date.toLocaleString($language, {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
      </h3>
      <ol class="grid">
        {#each day.sessions as session}
          <li>
            <Session type="link" {session} />
          </li>
        {/each}
      </ol>
    </li>
  {/each}
</ol>

<style>
  .Program {
    margin-top: var(--space-lg);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-grid);
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

    .grid details {
      grid-column: span 2;
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

  @media (max-width: 1399px) {
    .item:nth-child(odd) .body::before {
      content: none;
    }

    .item:nth-child(2n + 1):nth-last-child(-n + 2),
    .item:nth-child(2n + 1):nth-last-child(-n + 2) ~ .item {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  @media (min-width: 1400px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .grid details {
      grid-column: span 3;
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
