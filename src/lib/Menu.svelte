<script>
  import logo from './utils/logo.js'
  import { isSameDay } from 'date-fns'
  import resolve from './utils/resolve.js'
  import { current } from './Event.svelte'
  import Link, { LINK } from './Link.svelte'
  import { asDate } from '@prismicio/helpers'
  import { onMount, setContext } from 'svelte'

  export let prefix = null
  export let slices
  export let keeptop
  export let adaptive = null
  export let button = null
  export let branding
  export let stacked

  let checked = false
  let sticky
  let scroll
  let locked

  if (prefix) {
    setContext(LINK, function (document) {
      return { href: resolve(document, prefix) }
    })
  }

  $: sessions = $current?.data.sessions
    .map((item) => item.session)
    .filter((session) =>
      session.data?.start_date_time
        ? (session.id && !session.isBroken && session.data.is_streamed) ||
          isSameDay(
            asDate(session.data.start_date_time) - 1000 * 60 * 60,
            Date.now()
          ) ||
          isSameDay(
            asDate(session.data.end_date_time) - 1000 * 60 * 60,
            Date.now()
          )
        : false
    )

  $: isLive =
    sessions?.some((session) =>
      session.data?.start_date_time
        ? asDate(session.data.start_date_time) - 1000 * 60 * 60 < Date.now()
        : false
    ) &&
    sessions?.some((session) =>
      session.data?.end_date_time
        ? asDate(session.data.end_date_time) - 1000 * 60 * 60 > Date.now()
        : false
    )

  function onresize() {
    const styles = window.getComputedStyle(document.documentElement)
    locked = parseInt(styles.getPropertyValue('--doc-narrow'))
  }

  function onscroll() {
    if (keeptop) return
    const { scrollY } = window
    if (scrollY > 100) {
      sticky = true
      scroll = 1
      return
    } else if (scrollY < 100 && scrollY > 0) {
      scroll = (scrollY / 100).toFixed(3)
    } else if (scrollY <= 0) {
      scroll = 0
    }
    sticky = false
  }

  function scrollTop(event) {
    if (event.currentTarget.getAttribute('href') !== window.location.pathname)
      return

    close()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    event.preventDefault()
  }

  function jump(event) {
    let target = document.getElementById(
      event.currentTarget.getAttribute('href').slice(1)
    )
    let offset = getComputedStyle(document.documentElement).getPropertyValue(
      '--scroll-offset'
    )

    close()

    let delay = parseInt(event.currentTarget.dataset.delay || 0)
    setTimeout(function () {
      window.scrollTo({
        top: target.offsetTop - offset,
        left: 0,
        behavior: 'smooth'
      })
    }, delay)
    event.preventDefault()
  }

  onMount(() => {
    onresize()
    onscroll()
  })

  function toggle() {
    if (checked) close()
  }

  function close() {
    window.requestAnimationFrame(function () {
      checked = false
    })
  }

  function lockscroll(event) {
    if (!locked) return
    event.preventDefault()
  }

  function removetapdelay() {}
</script>

<svelte:window on:resize={onresize} on:scroll|passive={onscroll} />

<header
  class="Menu"
  class:sticky
  class:adaptive
  class:keeptop
  style="--scroll: {scroll || 0};">
  {#if $current.data.seo_title}
    <h1 class="u-hiddenVisually">{$current.data.seo_title}</h1>
  {/if}

  <div class="container u-printHidden">
    {#if branding === 'Climate Events'}
      <a class="logo" href="/" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Events</span>
        <br /><br />
        {@html logo('climate-events')}
      </a>
    {:else if branding === 'Climate Forward'}
      <a class="logo" href="/climate-forward" on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times Climate Forward</span>
        <br /><br />
        {@html logo('climate-forward')}
      </a>
    {:else if branding === 'A New Climate'}
      <a
        class="logo"
        href="/a-new-climate/events/san-francisco"
        on:click={scrollTop}>
        <span class="u-hiddenVisually">The New York Times A New Climate</span>
        <br /><br />
        {@html logo('a-new-climate')}
      </a>
    {/if}

    {#if slices?.length > 0}
      <input
        style="display: none"
        id="switch"
        class="switch"
        bind:checked
        type="checkbox" />
      <label
        style="display: none"
        class="toggle"
        for="switch"
        on:touchstart={removetapdelay}
        on:click={toggle}>
        <svg role="presentation" class="line" viewBox="0 0 24 1">
          <path fill="currentColor" d="M0 0h24v1.75H0z" />
        </svg>
        <svg role="presentation" class="line" viewBox="0 0 24 1">
          <path fill="currentColor" d="M0 0h24v1.75H0z" />
        </svg>
        Toggle menu
      </label>

      <nav class="nav" on:touchmove={lockscroll} on:wheel={lockscroll}>
        {#if branding === 'Climate Events'}
          <a style="display: none" class="logo" href="/" on:click={scrollTop}>
            <span class="u-hiddenVisually">
              The New York Times Climate Events
            </span>
            {@html logo('climate-events')}
          </a>
        {:else if branding === 'Climate Forward'}
          <a
            style="display: none"
            class="logo"
            href="/climate-forward"
            on:click={scrollTop}>
            <span class="u-hiddenVisually">
              The New York Times Climate Forward
            </span>
            {@html logo('climate-forward')}
          </a>
        {:else if branding === 'A New Climate'}
          <a
            style="display: none"
            class="logo"
            href="/a-new-climate/events/san-francisco"
            on:click={scrollTop}>
            <span class="u-hiddenVisually"
              >The New York Times A New Climate</span>
            {@html logo('a-new-climate')}
          </a>
        {/if}
        <div class="content">
          <ul class="list">
            {#each slices as slice}
              <li>
                {#if slice.slice_type === 'link'}
                  <Link class="link" document={slice.primary.link}>
                    <span data-text={slice.primary.label}>
                      {slice.primary.label}
                    </span>
                  </Link>
                {/if}
                {#if slice.slice_type === 'scroll_link' || (slice.slice_type === 'live_stream_link' && isLive)}
                  <a
                    class="link"
                    on:click={jump}
                    href="#{slice.primary.slice_id}">
                    <span data-text={slice.primary.label}>
                      {slice.primary.label}
                    </span>
                  </a>
                {/if}
              </li>
            {/each}

            {#if button}
              <li>
                <Link class="button" document={button.link}>{button.text}</Link>
              </li>
            {/if}
          </ul>
        </div>
      </nav>
    {/if}
  </div>
</header>

<hr class="u-hiddenVisually" />

<div class="space" class:stacked class:adaptive />

<style>
  :root {
    --menu-height: 4.5rem;
  }

  .Menu {
    --scroll: 0;
    --x: var(--doc-margin);
    --x-shrinked: 1.25rem;
    --y: 1.6rem;
    --y-shrinked: -0.75rem;
    --y-offset: 1rem;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    height: var(--menu-height);
    -webkit-user-select: none;
    user-select: none;
    pointer-events: none;
    color: var(--current-color);
  }

  .Menu br {
    display: none;
  }

  .keeptop {
    position: absolute;
  }

  .space {
    margin-bottom: calc(var(--menu-height) * 2 + 12vh);
  }

  @media (max-width: 500px) {
    .space {
      margin-bottom: calc(var(--menu-height) * 2 + 2vh);
    }
  }

  .space.stacked {
    margin-bottom: var(--menu-height);
  }

  .space.adaptive {
    display: none;
  }

  .Menu.adaptive[style*=':0;'],
  .Menu.adaptive[style*=': 0;'] {
    --current-color: #fff;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--y) var(--x);
  }

  .container > * {
    pointer-events: initial;
  }

  .nav {
    pointer-events: none;
  }

  .nav > * {
    pointer-events: initial;
  }

  .logo {
    display: inline-block !important;
    width: auto;
    height: 1rem;
    position: relative;
    top: 0.12rem;
    -webkit-touch-callout: none;
    outline-offset: var(--focus-ring-width);
  }

  :global(.Menu .logo svg) {
    display: block;
    height: 100%;
    width: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .logo,
  :global(.Menu .link),
  .toggle {
    transition: opacity 250ms var(--ease-out);
    cursor: pointer;
  }

  .logo:active,
  :global(.Menu .link:active),
  .toggle:active {
    transition: none;
    opacity: 0.6;
  }

  :global(.Menu .button) {
    display: inline-block;
    padding: 0.875rem 1.25em;
    border: 1px solid currentColor;
    font-size: 0.875rem;
    line-height: 1;
    text-align: center;
    letter-spacing: var(--doc-letter-spacing-wide);
    text-transform: uppercase;
    margin-top: 0.9rem;
    border-radius: 0.125rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    outline-offset: var(--focus-ring-width);
  }

  :global(.Menu .button:hover) {
    text-decoration: none;
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  :global(.Menu .button:active) {
    opacity: 0.75;
  }

  /* shrink animation */

  :root[scripting-enabled] {
    position: fixed;
    top: 0;
    left: 0;
  }

  .Menu::before {
    content: '';
    background: var(--current-color-background);
    position: absolute;
    top: -8rem;
    left: 0;
    width: 100%;
    height: calc(var(--menu-height) + 8rem);
    opacity: 0;
    pointer-events: initial;
    box-shadow: 0 0 0.4rem rgb(0, 0, 0, 0.15);
  }

  .Menu::before {
    opacity: var(--scroll);
    transform: translateY(
      calc(((var(--y-shrinked) * 0.35) - 1rem) * var(--scroll))
    );
  }

  .Menu.sticky::before {
    opacity: 1;
    transform: translateY(calc((var(--y-shrinked) * 0.35) - 1rem));
  }

  @media (min-width: 700px) {
    .Menu::before {
      opacity: var(--scroll);
      transform: translateY(
        calc(((var(--y-shrinked) * -1) - 1.2rem) * var(--scroll))
      );
    }

    .Menu.sticky::before {
      opacity: 1;
      transform: translateY(calc((var(--y-shrinked) * -1) - 1.2rem));
    }
  }

  .logo {
    transform: translate(
      calc((var(--x) * -1 + var(--x-shrinked)) * var(--scroll)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)) * var(--scroll))
    );
  }

  .Menu.adaptive[style*=':0;'] .logo,
  .Menu.adaptive[style*=': 0;'] .logo {
    opacity: 0;
  }

  .Menu.adaptive .logo {
    opacity: calc(var(--scroll) * 1.5);
    transition: none;
  }

  .Menu.adaptive .nav .logo {
    opacity: 1;
  }

  .Menu.sticky .logo {
    transform: translate(
      calc(var(--x) * -1 + var(--x-shrinked)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)))
    );
  }

  .toggle {
    transform: translate(
      calc((var(--x) - var(--x-shrinked)) * var(--scroll)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)) * var(--scroll))
    );
  }

  .Menu.sticky .toggle {
    transform: translate(
      calc(var(--x) - var(--x-shrinked)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)))
    );
  }

  @media (min-width: 900px) {
    .content {
      transform: translate(
        calc((var(--x) - var(--x-shrinked)) * var(--scroll)),
        calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)) * var(--scroll))
      );
    }

    .Menu.sticky .content {
      transform: translate(
        calc(var(--x) - var(--x-shrinked)),
        calc(((var(--y-shrinked) / 2 * -1) - var(--y-offset)))
      );
    }
  }

  @media (min-width: 400px) {
    .logo {
      height: 1.15rem;
      top: 0.1rem;
    }
  }

  @media (min-width: 700px) {
    :root {
      --menu-height: 4.8rem;
    }

    .Menu {
      --y: 1.7rem;
      --x: 3rem;
      --x-shrinked: 1.9rem;
      --y-offset: 0.6rem;
      --y-shrinked: 0.05rem;
    }

    .keeptop {
      --x: var(--doc-margin);
    }

    .logo {
      height: 1.3rem;
    }
  }

  @media (min-width: 900px) {
    :root {
      --menu-height: 4.95rem;
    }

    .Menu {
      --y: 1.3rem;
      --y-offset: 0.6rem;
      --y-shrinked: -0.5rem;
    }
  }

  @media (min-width: 1000px) {
    .keeptop {
      --x: 3rem;
    }
  }

  @media (min-width: 1100px) {
    .Menu {
      --y: 1.2rem;
    }
  }

  /**
  * Narrow viewport .Menu
  */

  @media (max-width: 899px) {
    .nav {
      --current-color: var(--doc-color) !important;

      color: var(--current-color);
      display: none;
      position: fixed;
      z-index: 1;
      width: 100%;
      top: 0;
      left: 0;
      pointer-events: initial;
      background: var(--current-color-background);
    }

    .toggle {
      display: block !important;
      font-size: 0;
      position: relative;
      z-index: 2;
      width: 1.5rem;
      height: 0.625rem;
      padding: 1rem;
      box-sizing: content-box;
      list-style: none;
      outline: 0;
      margin: -1rem;
    }

    .toggle:active {
      opacity: 0.5;
    }

    .switch:focus-visible + .toggle {
      outline: dashed var(--focus-ring-width) !important;
      outline-color: var(--focus-ring-color) !important;
    }

    .line {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 1.5rem;
    }

    .line:nth-child(2) {
      top: auto;
      bottom: 1rem;
    }

    .switch {
      display: block !important;
      position: fixed;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }

    .switch:checked + .toggle {
      color: var(--doc-color);
    }

    .switch:checked + .toggle .line {
      top: 48%;
      transform: rotate(45deg);
      transform-origin: center;
    }

    .switch:checked + .toggle .line:nth-child(2) {
      transform: rotate(-45deg);
      transform-origin: center;
    }

    .switch:checked ~ .nav {
      display: block;
      overflow: hidden;
      min-height: 100vh;
      padding: var(--y) var(--x);
      box-shadow: 0 0 0 1rem var(--current-color-background);
    }

    @supports (min-height: 100dvh) {
      .switch:checked ~ .nav {
        min-height: 100dvh;
      }
    }

    .content {
      margin-top: calc(var(--menu-height) + 6vh - 0.4rem);
      position: absolute;
      top: 0;
      left: var(--x);
    }

    :global(.Menu .link) {
      display: inline-block;
      font-size: 2.15rem;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.025em;
      padding: 0.4rem 0;
    }

    :global(.Menu .link:hover) {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.11em;
    }

    :global(.Menu .active) {
      font-weight: 900;
    }
  }

  @media (max-width: 399px) {
    :global(.Menu .link) {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 700px) and (max-width: 899px) {
    .content {
      margin-top: calc(var(--menu-height) + 11vh - 0.4rem);
    }
  }

  @media (min-width: 800px) and (max-width: 899px) {
    :global(.Menu .link) {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 899px) and (max-height: 449px) {
    :global(.Menu .link) {
      font-size: 1.75rem;
      padding: 0.3rem 0;
    }
  }

  /**
   * Wider viewport .Menu
   */

  @media (min-width: 900px) {
    .container {
      z-index: 1;
      position: relative;
      padding: var(--y) var(--x);
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .list {
      display: flex;
      align-items: center;
      min-height: 2.2725rem;
    }

    .list li:last-child {
      margin-right: -0.5rem;
    }

    .list li + li {
      margin-left: 0.5rem;
    }

    :global(.Menu .link) {
      display: block;
      padding: 0.5rem 0.5rem;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.05;
      letter-spacing: var(--doc-letter-spacing-wide);
      text-transform: uppercase;
    }

    :global(.Menu .link:hover) {
      text-decoration: underline;
      text-decoration-color: var(--current-color);
      text-underline-offset: 0.175em;
    }

    :global(.Menu .active) {
      position: relative;
    }

    :global(.Menu .active > .link) {
      color: transparent;
    }

    :global(.Menu .active > a > span::before) {
      content: attr(data-text);
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 900;
      color: var(--current-color);
      white-space: nowrap;
      transform: translate(-50%, -50%);
      letter-spacing: 0.03em;
    }

    .toggle,
    .switch,
    .nav .logo {
      display: none !important;
    }

    :global(.Menu .button) {
      padding: 0.7rem 0.7rem;
      font-size: 0.75rem;
      margin: 0 0 0 0.5rem;
    }
  }

  @media (min-width: 1100px) {
    :global(.Menu .link),
    :global(.Menu .button) {
      font-size: 0.875rem;
    }

    :global(.Menu .button) {
      padding: 0.75rem 1rem;
      margin: 0 0 0 0.5rem;
      position: relative;
      top: -0.5px;
    }

    .list {
      min-height: 2.5rem;
    }

    .list li + li {
      margin-left: 1rem;
    }
  }

  @media (min-width: 1100px) {
    /* .Menu {
      --y-offset: 0rem;
      --x: 4rem;
      --y: 2.5rem;
    } */

    .logo {
      height: 1.45rem;
      position: relative;
      top: 0.15rem;
    }
  }
</style>
