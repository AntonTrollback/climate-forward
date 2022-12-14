<script>
  import { page } from '$app/stores'
  import { setContext } from 'svelte'
  import Purr from './Purr.svelte'
  import logo from './utils/logo.js'
  import resolve from './utils/resolve.js'
  import whitespace from './utils/whitespace.js'
  import Link, { LINK } from './Link.svelte'

  export let prefix = null
  export let links
  export let copyright
  export let branding

  if (prefix) {
    setContext(LINK, function (document) {
      return { href: resolve(document, prefix) }
    })
  }

  function scrollTop(event) {
    if (event.currentTarget.getAttribute('href') !== window.location.pathname) {
      return
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    event.preventDefault()
  }
</script>

<hr class="u-hiddenVisually" />

<footer class="Footer">
  <h2 class="u-hiddenVisually">Page Information</h2>
  <nav class="u-container">
    {#if branding === 'Climate Events'}
      <a class="logo" href="/" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Events</span>
        <br /><br />
        {@html logo('climate-events')}
      </a>
    {:else if branding === 'Climate Forward'}
      <a class="logo" href="/" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Forward</span>
        <br /><br />
        {@html logo('climate-forward')}
      </a>
    {:else if branding === 'A New Climate'}
      <a class="logo" href="/san-francisco" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times A New Climate</span>
        <br /><br />
        {@html logo('a-new-climate')}
      </a>
    {:else if branding === 'Climate Hub'}
      <a class="logo" href="/san-francisco" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times A New Climate</span>
        <br /><br />
        {@html logo('climate-hub')}
      </a>
    {/if}
    {#if links?.length > 0}
      <h3 class="u-hiddenVisually">Navigation</h3>
      <ul class="list">
        {#each links as link}
          <li class="item">
            <Link href={link.href} class="link">{link.text}</Link>
          </li>
        {/each}
      </ul>
    {/if}
    <Purr />
    <p>{@html copyright ? whitespace(copyright) : ''}</p>
  </nav>

  <div class="u-hidden" style="display: none" aria-hidden="true">
    <a href="/thank-you">.</a>
    <a href="/press-thank-you">.</a>
    <a href="/london-thank-you">.</a>
    <a href="/a-new-climate-thank-you">.</a>
    <a href="/sharm-el-sheikh-thank-you">.</a>
    <a href="/the-fashion-opportunity">.</a>
    <a href="/the-fashion-opportunity-menu">.</a>
    <a href="/sharm-el-sheikh-google">.</a>
    <a href="/sharm-el-sheikh-google-menu">.</a>
    <a href="/sharm-el-sheikh-bcg">.</a>
    <a href="/sharm-el-sheikh-bcg-menu">.</a>
    <a href="/sharm-el-sheikh-fashion-exhibition">.</a>
    <a href="/lunch-menu">.</a>
    <a href="/closing-the-gap-on-climate-inequity">.</a>
    <a href="/new-york/wifi">.</a>
    <a href="/climatehub">.</a>
    <a href="/can-fashion-influencers-persuade-us-to-consume-less">.</a>

    <a href="/the-fashion-opportunity">.</a>
    <a href="/404">.</a>
  </div>
</footer>

<style>
  .Footer {
    padding: var(--space-sm) 0 var(--space-block-md);
    text-align: center;
    font-size: 0.75rem;
    margin-top: var(--space-block-xl);
    border-top: 1px solid var(--current-color-border);
  }

  @media print {
    .Footer {
      display: none !important;
    }
  }

  .Footer br {
    display: none;
  }

  .logo {
    height: 100%;
    width: auto;
    height: 1.15rem;
    margin: 0.75rem auto 0;
    display: inline-block;
    vertical-align: bottom;
  }

  :global(.Footer .logo svg),
  :global(.Footer .logo img) {
    display: block;
    height: 100%;
    width: auto;
    margin: 0 auto;
  }

  @media (min-width: 400px) {
    .logo {
      height: 1.3rem;
    }
  }

  @media (min-width: 700px) {
    .logo {
      height: 1.65rem;
    }
  }

  .list {
    max-width: 19rem;
    margin: 0.875rem auto 0.1rem;
    -webkit-user-select: none;
    user-select: none;
  }

  @media (min-width: 500px) {
    .list {
      max-width: 28rem;
    }
  }

  .item {
    display: inline-block;
  }

  :global(.Footer .link) {
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    padding: 0.1rem 0.25rem;
    text-underline-offset: 0.1em;
    text-decoration-thickness: 0.25px;
    text-decoration-skip-ink: none;
    outline-offset: -2px;
  }

  :global(.Footer .link),
  .logo {
    transition: opacity 250ms var(--ease-out);
  }

  :global(.Footer .link:hover),
  .logo:hover {
    text-decoration: underline;
  }

  :global(.Footer .link:active),
  .logo:active {
    transition: none;
    opacity: 0.6;
  }
</style>
