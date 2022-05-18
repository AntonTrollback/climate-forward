<script>
  import iframeResize from 'iframe-resizer/js/iframeResizer'
  import { onMount, onDestroy } from 'svelte';
  export let url
  let iframe

  onMount(function () {
    resizer = iframeResize(iframe)
  })

	onDestroy(function () {
    iframe?.iFrameResizer && iframe.iFrameResizer.removeListeners()
  })
</script>

<iframe
  bind:this={iframe}
  src='https://codeandconspire.com'
  allowpaymentrequest="true"
  allow="payment"
  fetchpriority="high"
  loading="eager"
  referrerpolicy="origin-when-cross-origin"
  frameborder="0"
  title="Iframe for the URL: {url}" />

<style>
  iframe {
    width: 1px;
    min-width: 100%;
    border: 0;
    min-height: 20rem;
  }
</style>
