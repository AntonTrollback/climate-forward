<script>
  import { asText } from '@prismicio/helpers'
  import RichText from './RichText.svelte'
  export let title
  export let text
</script>

<div class="layout">
  <div class="aside">
    <div class="Text Text--xl Text--spaced">
      <h2 class="Text-p">{asText(title)}</h2>
    </div>
  </div>
  <div class="maps" area-hidden="true">
    <div class="item">
      <div class="figure">
        <img role="presentation" src="/map-nyc-1.svg" loading="lazy" alt="" />
        <span class="label l1 dark"><span>Entrance</span></span>
        <span class="label l2"><span>Registration</span></span>
        <span class="label l3"><span>Security Check</span></span>
        <span class="label l4"><span>Main Stage</span></span>
        <span class="label l5"><span>Beverage<br />Station</span></span>
      </div>
      <div class="Text u-spaceMd">
        <span class="Text-h5">Upper Level</span>
      </div>
    </div>
    <div class="item">
      <div class="figure">
        <img role="presentation" src="/map-nyc-2.svg" loading="lazy" alt="" />
        <span class="label l6"><span>The Hall Lobby</span></span>
      </div>
      <div class="Text u-spaceMd">
        <span class="Text-h5 l6"><span>Lower Level</span></span>
      </div>
    </div>
  </div>
  <div class="main">
    <RichText size="sm" fields={text} />
  </div>
</div>

<style>
  :root {
    --Map-floor-width: 10rem;
  }

  .maps {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-block-sm);
    margin-top: 1.5rem;
  }

  @media (min-width: 550px) {
    .maps {
      grid-template-columns: 1fr 1fr;
    }
  }

  .figure {
    position: relative;
    user-select: none;
  }

  .item img {
    display: block;
    width: 100%;
    height: auto;
  }

  .label {
    position: absolute;
    display: flex;
    height: 10%;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.75rem;
    line-height: 1;
    pointer-events: none;
  }

  @media (min-width: 1300px) {
    .label {
      font-size: 0.8125rem;
    }
  }

  .dark {
    color: var(--current-color);
  }

  .l1 {
    top: -9%;
    left: 48.6%;
    width: 20%;
  }

  .l2 {
    top: 4.5%;
    right: 20%;
    height: 10%;
  }

  .l3 {
    top: 14%;
    left: 36.8%;
    height: 11%;
  }

  .l4 {
    top: 40%;
    left: 3%;
    height: 52.5%;
    width: 52%;
  }

  .l5 {
    bottom: 6%;
    right: 7.8%;
    height: 14.5%;
  }

  .l6 {
    bottom: 0;
    left: 0;
    height: 74%;
    width: 60%;
  }

  .main {
    margin-top: 1.375rem;
  }

  /* Title Layout */

  .aside {
    margin-bottom: var(--space-md);
  }

  @media (min-width: 1000px) {
    .layout {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0 calc(var(--space-grid) * 2);
    }

    .aside > * {
      max-width: 23rem;
    }

    .main,
    .maps {
      grid-column: span 2;
    }

    .maps + .main {
      grid-column: 2 / 4;
    }
  }
</style>
