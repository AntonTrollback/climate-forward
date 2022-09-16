<script>
  // import { asText } from '@prismicio/helpers'
  // export let title
</script>

<div class="layout">
</div>

<style>
  :root {
    --Map-floor-width: 10rem;
  }

  .map {
    display: flex;
    flex-wrap: wrap;
  }

  .floor {
    width: 100%;
    margin-top: var(--space-block-sm);
    margin-bottom: var(--space-md);
  }

  .floor svg {
    width: var(--Map-floor-width);
    height: auto;
  }

  /* .caption {
    order: 1;
  } */

  /* Special floor sizings */

  .floor-0 svg {
    width: calc(var(--Map-floor-width) * 1.608);
  }

  .floor-0 .label {
    margin-left: calc(var(--Map-floor-width) * 0.6);
  }

  .floor-4 svg {
    width: calc(var(--Map-floor-width) * 1.42);
  }

  /* Title Layout */

  .aside {
    margin-bottom: var(--space-md);
  }

  @media (min-width: 1000px) {
    .layout {
      display: flex;
    }

    .aside {
      width: calc(100% / 3);
      padding-right: 2rem;
      flex-shrink: 0;
    }

    .aside > * {
      max-width: 23rem;
    }

    .main {
      padding-left: 2rem;
      flex-grow: 1;
    }
  }
</style>
