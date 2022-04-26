<script>
  import { asText, asHTML } from '@prismicio/helpers'
  import resolve from '$lib/utils/resolve.js'
  import { page } from '$app/stores'
  export let slices
</script>

{#each slices as slice}
  {#if slice.slice_type === 'events'}
    <div id="{slice.primary.id}">
      {#each slice.items as item}
        <a href="{resolve($page, item.event)}">{item.event.uid}</a>
      {/each}
    </div>
  {/if}
  {#if slice.slice_type === 'rich_text'}
    <div id="{slice.primary.id}">
      {@html asHTML(slice.primary.text, resolve($page))}
    </div>
  {/if}
{/each}
