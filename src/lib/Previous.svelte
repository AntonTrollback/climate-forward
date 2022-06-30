<script>
  import Link from './Link.svelte'
  import { asText } from '@prismicio/helpers'

  export let sessions = []
  export let limit = 4

  let isExpanded = false

  $: sessionsWithVideo = sessions.filter((session) => session.data.video)

  function expand(event) {
    isExpanded = true
    event.preventDefault()
  }
</script>

<ol>
  {#each sessionsWithVideo.slice(0, isExpanded ? Infinity : limit) as session}
    <li>
      <Link document={session}>
        <img
          alt={session.data.video.title}
          src={session.data.video.thumbnail_url}
          width={session.data.video.thumbnail_width}
          height={session.data.video.thumbnail_height} /><br />
        {asText(session.data.name)}<br />
        Learn more
      </Link>
    </li>
  {/each}
</ol>
{#if !isExpanded && sessionsWithVideo.length > limit}
  <button on:click={expand}>Show more</button>
{/if}

<style>
</style>
