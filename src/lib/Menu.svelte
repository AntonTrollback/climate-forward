<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'
  import { page } from '$app/stores'
  export let slices
</script>

{#each slices as slice}
  {#if slice.slice_type === 'link'}
    <a href="{resolve($page, slice.primary.link.url)}">{slice.primary.label}</a>
  {/if}
  {#if slice.slice_type === 'scroll_link'}
    <a href="#{slice.primary.slice_id}">{slice.primary.label}</a>
  {/if}
{/each}
