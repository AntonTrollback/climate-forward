<script>
  import { onMount } from 'svelte'

  onMount(function () {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', setFavicon)
    setFavicon()

    return () => media.removeEventListener('change', setFavicon)

    function setFavicon () {
      const href = `/favicon-${media.matches ? 'dark' : 'light'}.ico`
      document.querySelector('link[rel="icon"]').href = href
    }
  })
</script>

<style>
  @import "$lib/config.css";
  @import "$lib/normalize.css";
  @import "$lib/fonts/index.css";
  @import "$lib/utils/index.css";
</style>

<slot></slot>
