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
  export let items
  export let props = { large: false }
  let { large } = props

  if (props.link_external) {
    items = items.map(function (item) {
      item.event.target = '_blank'
      return item
    })
  }
</script>

<ol>
  {#each items as item, index}
    <li class:shuffle={!large}>
      {#if index !== 0}
        <Divider solid="true" size={large ? 'xl' : 'md'} />
      {/if}
      <div class="content">
        <h2 class={large ? 'Text-h1 Text-full' : 'Text-h2 Text-full'}>
          {asText(item.event.data.name)}
        </h2>
        {#if large}
          <span class="Text-h1 Text-full"><em>{item.event.data.date}</em></span>
        {:else}
          <div class="u-text">
            <p><strong>{item.event.data.date}</strong></p>
          </div>
        {/if}
        <RichText fields={item.event.data.description} />
        <div class="action">
          {#if item.override_link?.url}
            <Button solid={item.solid_button} document={item.override_link}>
              {item.override_link_text}
            </Button>
          {:else}
            <Button
              solid={item.solid_button}
              document={item.event}
              target="_blank">See event</Button>
          {/if}
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
