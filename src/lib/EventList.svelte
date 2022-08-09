<script>
  import RichText from './RichText.svelte'
  import Button from './Button.svelte'
  import Divider from './Divider.svelte'
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
    <li class:shift={!large}>
      {#if index !== 0}
        <Divider solid="true" size={large ? 'lg' : 'md'} />
      {/if}
      <div class="content">
        <h2 class="{large ? 'Text-h1' : 'Text-h2'} u-fill">
          {asText(item.event.data.name)}
        </h2>
        {#if large}
          <span class="Text-h1 u-fill"><em>{item.event.data.date}</em></span>
        {:else}
          <div class="Text u-spaceSm">
            <p>
              <strong>
                {#if item.event.data.past_event}Past event, {/if}{item.event
                  .data.date}
              </strong>
            </p>
          </div>
        {/if}
        <RichText
          class={large ? 'u-spaceXl' : ''}
          fields={item.event.data.description} />
        <div class="action">
          {#if item.override_link?.url}
            <Button solid={item.solid_button} document={item.override_link}>
              {item.override_link_text}
            </Button>
          {:else}
            <Button
              solid={item.solid_button}
              document={item.event}
              target="_blank"
              >{item.event.data.past_event ? 'Watch now' : 'See event'}</Button>
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
    margin-top: var(--space-xl);
  }

  .shift .action {
    margin-top: var(--space-md);
  }

  @media (min-width: 1000px) {
    .shift .action {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: var(--space-sm);
    }
  }
</style>
