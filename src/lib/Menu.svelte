<script>
  import Link from '$lib/Link.svelte'
  export let slices
</script>

{#each slices as slice}
  {#if slice.slice_type === 'link'}
    <Link document={slice.primary.link}>{slice.primary.label}</Link>
  {/if}
  {#if slice.slice_type === 'scroll_link'}
    <a href="#{slice.primary.slice_id}">{slice.primary.label}</a>
  {/if}
{/each}
