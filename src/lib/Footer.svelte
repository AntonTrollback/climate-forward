<script>
  import { page } from '$app/stores'
  import { setContext } from 'svelte'
  import Purr from './Purr.svelte'
  import Divider from './Divider.svelte'
  import resolve from './utils/resolve.js'
  import logo from './utils/logo.js'
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

<footer class="Footer">
  <Divider size="xl" />
  <div class="u-container">
    {#if branding === 'Climate Events'}
      <a class="logo" href="/" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Events</span>
        {@html logo('climate-events')}
      </a>
    {:else if branding === 'Climate Forward'}
      <a class="logo" href="/climate-forward" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Forward</span>
        {@html logo('climate-forward')}
      </a>
    {:else if branding === 'A New Climate'}
      <a
        class="logo"
        href="/a-new-climate/events/san-francisco"
        on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times A New Climate</span>
        {@html logo('a-new-climate')}
      </a>
    {/if}
    {#if links.some((item) => item.text && (item.link.link_type !== 'Web' ? item.link.id && !item.link.isBroken : true))}
      <ul class="list">
        {#if branding === 'Climate Forward' && ($page.url.pathname === '/climate-forward/' || $page.url.pathname === '/climate-forward')}
          <li class="item strong">
            <a class="link" href="/">See all Climate Events</a>
          </li>
        {:else if branding === 'Climate Forward'}
          <li class="item strong">
            <a class="link" href="/climate-forward"
              >See all events in the Climate Forward Series</a>
          </li>
        {:else if branding === 'A New Climate'}
          <li class="item strong">
            <a class="link" href="/">See all Climate Events</a>
          </li>
        {/if}
        {#each links.filter((item) => item.text && (item.link.link_type !== 'Web' ? item.link.id && !item.link.isBroken : true)) as item}
          <li class="item {item.strong ? 'strong' : ''}">
            <Link class="link" document={item.link}>{item.text}</Link>
          </li>
        {/each}
      </ul>
    {/if}
    <Purr />
    <p>{@html copyright ? whitespace(copyright) : ''}</p>
  </div>

  <div class="u-hidden">
    <a href="/thank-you">.</a>
    <a href="/climate-forward/press-thank-you">.</a>
    <a href="/climate-forward/london-thank-you">.</a>
    <a href="/climate-forward/events/london-video-test">.</a>
  </div>
</footer>

<style>
  .Footer {
    padding-bottom: var(--space-block-md);
    text-align: center;
    font-size: 0.65rem;
  }

  @media (min-width: 600px) {
    .Footer {
      font-size: 0.75rem;
    }
  }

  .logo {
    height: 100%;
    width: auto;
    height: 1.15rem;
    margin: 0.75rem auto 0;
    display: inline-block;
    vertical-align: bottom;
  }

  :global(.Footer .logo svg) {
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
      max-width: 33rem;
    }
  }

  .item {
    display: inline-block;
  }

  .strong {
    font-weight: 700;
    display: block;
  }

  :global(.Footer .link) {
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    padding: 0.1rem 0.25rem;
    text-underline-offset: 0.05em;
    text-decoration-thickness: 0.25px;
    text-decoration-skip-ink: none;
    text-decoration: underline;
    outline-offset: -2px;
  }

  :global(.Footer .link),
  .logo {
    transition: opacity 250ms var(--ease-out);
  }

  :global(.Footer .link:active),
  .logo:active {
    transition: none;
    opacity: 0.6;
  }
</style>
