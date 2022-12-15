<script>
  import RichText from './RichText.svelte'
  import Button from './Button.svelte'
  import Divider from './Divider.svelte'
  import { asText } from '@prismicio/helpers'
  export let items
  export let props = { large: false }
  let { large } = props
</script>

<ol>
  {#each items as item, index}
    <li class:shift={!large}>
      {#if index !== 0}
        <Divider solid="true" size={large ? 'lg' : 'md'} />
      {/if}
      <div class="content">
        {#if !large}
          <div class="Text u-spaceSm {large ? '' : 'Text--xs'}">
            <p class="Text-p">{item.event.data.date}</p>
          </div>
        {/if}
        <h2 class="{large ? 'Text-h1' : 'Text-h4'} u-fill">
          {asText(item.event.data.name)}
        </h2>
        {#if large}
          <span class="Text-h1 u-fill"><em>{item.event.data.date}</em></span>
        {/if}
        <RichText
          size={large ? 'md' : 'sm'}
          class={'u-spaceLg'}
          fields={item.event.data.description} />
        <div class="action">
          <Button solid={item.solid_button} document={item.event}>
            {item.link_text}
          </Button>
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
