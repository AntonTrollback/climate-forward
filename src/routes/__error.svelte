<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ status }) {
    return { props: { status } }
  }
</script>

<script>
  export let status
</script>

<svelte:head>
  <title
    >{status}, {status === 404 ? 'Not found' : 'Something went wrong'}</title>
</svelte:head>
