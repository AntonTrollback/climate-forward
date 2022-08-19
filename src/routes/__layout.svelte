<script>
  import { onMount } from 'svelte'

  onMount(function () {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', setFavicon)
    setFavicon()

    const url = new URL(window.location)
    if (url.searchParams.get('preview')) {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src =
        'https://static.cdn.prismic.io/prismic.js?new=true&repo=climateforward'
      document.head.appendChild(script)
    }

    return () => media.removeEventListener('change', setFavicon)

    function setFavicon() {
      const href = `/favicon-${media.matches ? 'dark' : 'light'}.ico`
      document.querySelector('link[rel="icon"]').href = href
    }
  })
</script>

<svelte:head>
  <script>
    ;(function (w, d, s, l, i) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-W5GW2TS')
  </script>

  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-95HH8QKXZR"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-95HH8QKXZR')
  </script>
</svelte:head>

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-W5GW2TS"
    title=""
    height="0"
    width="0"
    style="display: none; visibility: hidden" />
</noscript>

<slot />

<style>
  @import '$lib/fonts.css';
  @import '$lib/config.css';
  @import '$lib/normalize.css';
  @import '$lib/utils/index.css';
</style>
