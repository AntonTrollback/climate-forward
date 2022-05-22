<script context="module">
  export const MODAL = Symbol('MODAL')
</script>

<section class="Modal">
  <div class="container">
    <div class="close">
      <slot name="close" />
    </div>
    <slot />
  </div>
</section>

<style>
  .Modal {
    display: flex !important;
    flex-direction: column;
    width: 100vw;
    height: var(--window-height, 100vh);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4;
    background: rgba(0, 0, 0, 0.2);
    padding: 2.5rem 1rem 5rem;
    overflow: scroll;
    user-select: text;
    pointer-events: initial;
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    .Modal {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .container {
    position: relative;
    background: #fff;
    color: #000;
    width: 54rem;
    max-width: 100%;
    margin: auto;
    padding: 1.5rem 1.5rem 2rem;
  }

  @media (min-width: 400px) {
    .Modal {
      padding: 2.5rem 2rem 5rem;
    }
  }

  @media (min-width: 500px) {
    .Modal {
      padding: 2.5rem 4rem 5rem;
    }

    .container {
      padding: 2rem 2rem 3rem;
    }
  }

  @media (min-width: 600px) {
    .Modal {
      padding: 5rem 6rem 5rem;
    }
  }

  @media (min-width: 700px) {
    .Modal {
      padding: 5rem 2rem 5rem;
    }
  }

  @media (min-width: 1000px) {
    .container {
      padding: 3rem;
    }
  }

  :global(.close a) {
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
    user-select: none;
    transition: opacity 150ms var(--ease-out);
    background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='13.7' cy='13' r='13' transform='rotate(90 13.7 13)' fill='%23000'/%3E%3Cpath d='m8.81 8.46 9.44 9.43M18.25 8.46l-9.43 9.43' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 1.625rem;
    background-position: center;
    cursor: pointer;
  }

  :global(.close a):active {
    transition: none;
    opacity: 0.6;
  }

  @media (min-width: 1000px) {
    :global(.close a) {
      top: 2rem;
      right: 2rem;
    }
  }

  :global(.close a)::before {
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
