<script>
  import { asText } from '@prismicio/helpers'
  import RichText from './RichText.svelte'
  export let title
  export let text
  export let type
</script>

<div class="layout">
  <div class="aside">
    <div class="Text Text--xl Text--spaced">
      <h2 class="Text-p">{asText(title)}</h2>
    </div>
  </div>
  {#if type === 'The Times Center, New York'}
    <div class="maps maps--nyc" area-hidden="true">
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
  {:else if type === 'Yerba Buena Center for the Arts, San Francisco'}
    <div class="maps maps--sfo" area-hidden="true">
      <div class="item">
        <div class="figure">
          <img role="presentation" src="/map-sfo-1.svg" loading="lazy" alt="" />
          <span class="label l1"><span>East Garden</span></span>
          <span class="label l2"><span>Entrance</span></span>
          <span class="label l3"><span>Lobby</span></span>
          <span class="label l4"><span>The Forum</span></span>
        </div>
        <div class="Text Text--sm u-spaceLg">
          <p><span class="Text-h5">Upper Level</span></p>
          <br />
          <p class="Text-p u-spaceSm">
            <strong>Registration and Cocktail&nbsp;Reception</strong>
            <br />
            Lobby
          </p>
          <p class="Text-p">
            <strong>Main Stage</strong>
            <br />
            The Forum
          </p>
          <p class="Text-p">
            <strong>Climate Futures Foretold&nbsp;Workshop</strong>
            <br />
            The East Garden (outside)
          </p>
        </div>
      </div>
      <div class="item">
        <div class="figure">
          <img role="presentation" src="/map-sfo-2.svg" loading="lazy" alt="" />
          <span class="label l5"><span>Gallery 3</span></span>
          <span class="label l6"><span>Screening <br />Room</span></span>
          <span class="label l7"><span>The Lounge</span></span>
        </div>
        <div class="Text Text--sm u-spaceLg">
          <p><span class="Text-h5">Lower Level</span></p>
          <br />
          <p class="Text-p u-spaceSm">
            <strong>Climate Wayfinding&nbsp;Workshop</strong>
            <br />
            The Screening&nbsp;Room
          </p>
          <p class="Text-p">
            <strong>The Climate Farm&nbsp;Workshop</strong>
            <br />
            Gallery
          </p>
          <p class="Text-p">
            <strong
              >Coastal Climate Connection Workshop with&nbsp;the Monterey
              Bay&nbsp;Aquarium</strong>
            <br />
            The Lounge
          </p>
          <p class="Text-p">
            <strong>Video Journalism Screenings</strong>
            <br />
            The Screening Room
          </p>
        </div>
      </div>
    </div>
  {/if}
  {#if text?.length}
    <div class="main">
      <RichText size="sm" fields={text} />
    </div>
  {/if}
</div>

<style>
  .maps {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space-block-sm);
  }

  .maps--nyc {
    margin-top: 1.6rem;
  }

  .maps--sfo {
    margin-top: 1.3rem;
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
    align-items: center;
    justify-content: center;
    height: 10%;
    color: #fff;
    font-size: 0.75rem;
    line-height: 1;
    pointer-events: none;
  }

  @media (min-width: 400px) {
    .label {
      font-size: 0.8125rem;
    }
  }

  @media (min-width: 550px) {
    .label {
      font-size: 0.6rem;
    }
  }

  @media (min-width: 750px) {
    .label {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 1200px) {
    .label {
      font-size: 0.8125rem;
    }
  }

  @media (min-width: 1400px) {
    .label {
      font-size: 1rem;
    }
  }

  .dark {
    color: var(--current-color);
  }

  /* NYC */

  .maps--nyc .l1 {
    top: -9%;
    left: 48.6%;
    width: 20%;
  }

  .maps--nyc .l2 {
    top: 4.5%;
    right: 20%;
    height: 10%;
  }

  .maps--nyc .l3 {
    top: 14%;
    left: 36.8%;
    height: 11%;
  }

  .maps--nyc .l4 {
    top: 40%;
    left: 3%;
    height: 52.5%;
    width: 52%;
  }

  .maps--nyc .l5 {
    bottom: 6%;
    right: 7.8%;
    height: 14.5%;
  }

  .maps--nyc .l6 {
    bottom: 0;
    left: 0;
    height: 74%;
    width: 60%;
  }

  /* SFO */

  .maps--sfo .l1 {
    top: 0;
    right: 0;
    height: 40%;
    width: 49%;
  }

  .maps--sfo .l2 {
    bottom: 29.3%;
    left: 0;
    height: 15%;
    width: 24.3%;
    transform: rotate(90deg);
    transform-origin: bottom left;
  }

  .maps--sfo .l3 {
    bottom: 10%;
    left: 28%;
    height: 19%;
    width: 17.5%;
  }

  .maps--sfo .l4 {
    bottom: 0;
    right: 5%;
    height: 58.5%;
    width: 31.5%;
  }

  .maps--sfo .l5 {
    left: 10%;
    bottom: 30%;
    height: 21%;
    width: 22%;
  }

  .maps--sfo .l6 {
    bottom: 30%;
    right: 38%;
    height: 21%;
    width: 19.5%;
  }

  .maps--sfo .l7 {
    bottom: 0;
    left: 0;
    height: 19%;
    width: 24.5%;
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
