<script context="module">
  export const MODAL = Symbol('MODAL')
</script>

<script>
  import { onMount } from 'svelte'
  export let iframing
  let modal

  onMount(function () {
    var theme = document.head
      .querySelector('[name="theme-color"]')
      .getAttribute('content')
    document.head
      .querySelector('[name="theme-color"]')
      .setAttribute('content', '#d6d6d6')
    document.documentElement.style.setProperty('overflow', 'hidden')
    modal.focus()
    return function () {
      document.head
        .querySelector('[name="theme-color"]')
        .setAttribute('content', theme)
      document.documentElement.style.removeProperty('overflow')
    }
  })
</script>

<section
  bind:this={modal}
  class="Modal {iframing ? 'iframing' : ''}"
  tabindex="-1"
  role="dialog">
  <div class="container">
    <slot />
    <div class="close">
      <slot name="close" />
    </div>
  </div>
</section>

<style>
  .Modal {
    display: flex !important;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.16);
    padding: 2.75rem 0.75rem var(--modal-offset-bottom, 6rem);
    overflow: scroll;
    -webkit-user-select: text;
    user-select: text;
    pointer-events: initial;
    text-decoration: none;
    outline: 0 !important;
  }

  .iframing {
    --container-width: 40rem;
    --modal-offset-bottom: 1.2rem;
  }

  @media (min-width: 500px) {
    .iframing {
      --modal-offset-bottom: 3rem;
    }
  }

  .container {
    position: relative;
    background: #fff;
    color: #000;
    width: var(--container-width, 59.5rem);
    max-width: 100%;
    margin: auto;
    padding: 1.5rem 1.5rem 2rem;
  }

  .iframing .container {
    padding: 0;
  }

  .iframing .container {
    height: 100%;
  }

  @supports (min-height: 100dvh) {
    .Modal {
      height: 100dvh;
    }
  }

  @media (min-width: 400px) {
    .Modal {
      padding: 3.8rem 1.2rem var(--modal-offset-bottom, 5rem);
    }
  }

  @media (min-width: 500px) {
    .Modal {
      padding: 4.2rem 2.75rem var(--modal-offset-bottom, 5rem);
    }

    .container {
      padding: calc(2rem);
      padding-bottom: calc(3rem);
    }
  }

  @media (min-width: 600px) {
    .Modal {
      padding: 4rem 6rem var(--modal-offset-bottom, 5rem);
    }
  }

  @media (min-width: 700px) {
    .Modal {
      padding: 5rem 2rem var(--modal-offset-bottom, 5rem);
    }
  }

  @media (min-width: 1000px) {
    .Modal {
      background: rgba(0, 0, 0, 0.16);
    }

    .container {
      padding: calc(3rem);
    }
  }

  :global(.close a),
  :global(.close button) {
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.75rem;
    margin: -0.75rem;
    font-size: 0;
    color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    transition: opacity 250ms var(--ease-out);
    background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='13.7' cy='13' r='13' transform='rotate(90 13.7 13)' fill='%23000'/%3E%3Cpath d='m8.81 8.46 9.44 9.43M18.25 8.46l-9.43 9.43' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 1.625rem;
    background-position: center;
    cursor: pointer;
    border-radius: 50%;
    outline-offset: -0.25rem;
  }

  :global(.close a):active,
  :global(.close button):active {
    transition: none;
    opacity: 0.6;
  }

  @media (min-width: 1000px) {
    :global(.close a),
    :global(.close button) {
      top: 2rem;
      right: 2rem;
    }
  }

  :global(.close a)::before,
  :global(.close button)::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    cursor: default;
  }
</style>
