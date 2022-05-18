<script context="module">
  export const graphQuery = `
    {
      ...eventFields
    }
  `
</script>

<script>
  import RichText from '$lib/RichText.svelte'
  import Button from '$lib/Button.svelte'
  import Divider from '$lib/Divider.svelte'
  import { asText } from '@prismicio/helpers'
  export let events
  export let props
  let { large } = props

  // if (props.link_external) {
  //   events = events.map(function (item) {
  //     return {
  //       ...item,
  //       link: {
  //         ...item.link,
  //         target: '_blank',
  //       }
  //     }
  //   })
  // }
</script>

<ol>
  {#each events as event}
    <li class:shuffle={!large}>
      <Divider solid="true" size={large ? 'xl' : 'md'} />
      <div class="content">
        <h2 class={large ? 'Text-h1 Text-full' : 'Text-h2 Text-full'}>
          {asText(event.data.name)}
        </h2>
        {#if large}
          <span class="Text-h1 Text-full"><em>{event.data.date}</em></span>
        {:else}
          <div class="u-text"><p><strong>{event.data.date}</strong></p></div>
        {/if}
        <RichText fields={event.data.description} />

        <div class="action">
          <Button document={event} text="See event" />
        </div>
      </div>
    </li>
  {/each}
</ol>

<style>
  .content {
    position: relative;
  }

  .action {
    padding-top: var(--space-sm);
  }

  .shuffle .action {
    padding-top: var(--space-xs);
  }

  @media (min-width: 1000px) {
    .shuffle .action {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>
