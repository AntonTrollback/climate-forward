<script>
  import RichText from './RichText.svelte'
  import { asText } from '@prismicio/helpers'
  import Button from './Button.svelte'

  export let dialog
  const content = dialog.data.body[0]
</script>

{#if dialog.data.iframe_url}
  <iframe
    src={dialog.data.iframe_url}
    title=""
    allowfullscreen="true"
    allowpaymentrequest="true"
    fetchpriority="high"
    loading="eager" />
{/if}

{#if content?.slice_type === 'two_actions'}
  <div class="Text Text--sm">
    <h1 class="Text-p"><strong>{asText(content.primary.header)}</strong></h1>
  </div>

  <div class="grid {content.primary.footer.text ? 'border' : ''}">
    {#each content.items as item}
      <section>
        <div class="Text">
          <h2 class="Text-h3">{asText(item.heading)}</h2>
          <RichText class="u-spaceSm" fields={item.text} />
        </div>
        {#if item.link}
          <Button class="u-spaceLg" document={item.link}
            >{item.link_text}</Button>
        {/if}
      </section>
    {/each}
  </div>
  {#if content.primary.footer.text}
    <RichText class="u-spaceSm" size="sm" fields={content.primary.footer} />
  {/if}
{/if}

<style>
  .grid {
    margin: 1.8rem 0 0;
  }

  .grid.border {
    border-bottom: 1px solid var(--current-color-border);
    padding: 0 0 2rem;
  }

  .grid section + section {
    border: 1px solid var(--current-color-border);
    border-width: 1px 0 0;
    padding-top: 1.7rem;
    margin-top: 2rem;
  }

  @media (min-width: 700px) {
    .grid {
      display: flex;
    }

    .grid section {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: space-between;
      padding-right: 2rem;
      width: 48%;
    }

    .grid section + section {
      border-width: 0 0 0 1px;
      padding: 0 0 0 2rem;
      margin: 0;
      width: 52%;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
  }
</style>
