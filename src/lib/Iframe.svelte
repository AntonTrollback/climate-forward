<script>
  export let url
</script>

<iframe
  src={url}
  allowpaymentrequest="true"
  allow="payment"
  fetchpriority="high"
  loading="eager"
  referrerpolicy="origin-when-cross-origin"
  frameborder="0"
  title="Iframe for the URL: {url}" />

<style>
  iframe {
    width: 100%;
    border: 0;
    min-height: 20rem;
  }
</style>
