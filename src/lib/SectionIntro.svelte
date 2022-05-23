<script>
  import { asText } from '@prismicio/helpers'
  import RichText from './RichText.svelte'
  import Button from './Button.svelte'
  import Sponsor from './Sponsor.svelte'
  export let content
  var { link, link_text, link_external } = content

  if (link_external) {
    link.target = '_blank'
  }
</script>

<div class="u-relative">
  <h2 class="Text-h1">
    {@html asText(content.heading).replace(/\n/g, '<br>')}
  </h2>
  <RichText size="lg" fields={content.text} />
  {#if link_text}
    <div class="action">
      <Button document={link}>{link_text}</Button>
    </div>
  {/if}
  {#if content.sponsor?.data}
    <div class="u-spaceTopSm">
      <Sponsor label={content.sponsor_label} org={content.sponsor.data} />
    </div>
  {/if}
</div>

<style>
  .action {
    padding-top: var(--space-sm);
  }

  @media (min-width: 1000px) {
    .action {
      position: absolute;
      padding-top: var(--space-xs);
      top: 0;
      right: 0;
    }
  }
</style>
