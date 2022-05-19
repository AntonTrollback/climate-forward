<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import { gettext, language } from '$lib/utils/i18n.js'
  import Session, { getTimestamps } from '$lib/Session.svelte'
  import { format, parse } from 'date-fns'

  export let sessions
  export const text = gettext(translations)

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

<ol>
  {#each days as day}
    <li>
      <h3>
        {text`Date`}: {day.date.toLocaleString($language, {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
      </h3>
      <ol>
        {#each day.sessions as session}
          <li>
            <Session type="link" {session} />
          </li>
        {/each}
      </ol>
    </li>
  {/each}
</ol>
