<script context="module">
  export const translations = {
    en: {}
  }
</script>

<script>
  import { asText, asHTML, asDate } from '@prismicio/helpers'
  import { gettext, language } from '$lib/i18n.js'
  import Session from '$lib/Session.svelte'
  import { format, parse } from 'date-fns'

  export let sessions
  export const text = gettext(translations)

  $: days = sessions
    .reduce(function (days, session) {
      const date = format(asDate(session.data.starts), 'yyyy-MM-dd')
      let day = days.find((day) => day.date === date)
      if (!day) {
        day = { date, sessions: [session] }
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
