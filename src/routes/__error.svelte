<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ status }) {
    return { props: { status } }
  }
</script>

<svelte:head>
  <title>Oops!</title>
</svelte:head>
