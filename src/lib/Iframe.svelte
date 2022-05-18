<script>
  // import iframeResize from 'iframe-resizer/js/iframeResizer'
  import { onMount, onDestroy } from 'svelte'
  export let src
  let script
  let iframe

  onMount(async () => {
    script.addEventListener('load', () => {
      resizer = window.iframeResize(iframe)

      onDestroy(function () {
        iframe?.iFrameResizer && iframe.iFrameResizer.removeListeners()
      })
    })
  })
</script>

<svelte:head>
  <script
    bind:this={script}
    src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js"></script>
</svelte:head>

<iframe
  bind:this={iframe}
  {src}
  allowpaymentrequest="true"
  allow="payment"
  fetchpriority="high"
  loading="eager"
  referrerpolicy="origin-when-cross-origin"
  frameborder="0"
  title="Climate Events Registration Iframe" />

<style>
  iframe {
    width: 1px;
    min-width: 100%;
    border: 0;
    min-height: 20rem;
  }
</style>
