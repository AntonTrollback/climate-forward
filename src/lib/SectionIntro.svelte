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
  <RichText class="u-spaceSm" size="lg" fields={content.text} />
  {#if link_text}
    <div class="action">
      <Button document={link}>{link_text}</Button>
    </div>
  {/if}
  {#if content.sponsor?.data}
    <Sponsor
      class="u-spaceXl"
      label={content.sponsor_label}
      org={content.sponsor.data} />
  {/if}
</div>

<style>
  .action {
    margin-top: var(--space-xl);
  }

  @media (min-width: 1000px) {
    .action {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: var(--space-sm);
    }
  }
</style>
