<script context="module">
  export function load({ params }) {
    return {
      status: 302,
      redirect: `/${params.root}/events/${params.event}`
    }
  }
</script>
