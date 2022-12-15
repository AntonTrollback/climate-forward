<script context="module">
  export function load({ status }) {
    return { props: { status } }
  }
</script>

<script>
  import Menu from '../lib/Menu.svelte'
  import Button from '../lib/Button.svelte'
</script>

<Menu slices={null} keeptop="true" branding={'Climate Forward'} />

<div class="u-container">
  <div class="Text Text--spaced Text--xl">
    <h3 class="Text-h3">Page Not Found</h3>
    <p class="Text-p">
      We’re sorry, we seem to have lost this page, but&nbsp;we don’t want to
      lose you.
    </p>
  </div>
</div>
<div class="u-container">
  <Button class="u-spaceXl" href="/">See all events</Button>
</div>

<svelte:head>
  <title>Page Not Found | The New York Times Climate Events</title>
</svelte:head>
