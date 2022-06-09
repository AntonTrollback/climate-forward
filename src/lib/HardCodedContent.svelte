<script>
  import Button from './Button.svelte'
  export let type
</script>

{#if type.includes('London')}
  <div class="Text Text--sm">
    <h1 class="Text-p"><strong>Be a part of the conversation.</strong></h1>
  </div>

  <div class="grid">
    <section>
      <div class="Text">
        <h2 class="Text-h3">In Person</h2>
        <p class="Text-p u-spaceSm">
          Join us live at the venue. Connect with Times&nbsp;journalists and
          other readers.
        </p>
      </div>
      <Button class="u-spaceLg">Choose a day to visit</Button>
    </section>

    <section>
      <div class="Text">
        <h2 class="Text-h3">Online</h2>
        <p class="Text-p u-spaceSm">
          Join us virtually from anywhere in the world, free&nbsp;of charge.
          Watch in real time or on demand.
        </p>
      </div>
      <Button class="u-spaceLg">Register now</Button>
    </section>
  </div>

  <section>
    <div class="Text Text--sm">
      <p class="Text-p">
        <strong>Looking for a press pass?</strong><br />
        Visit the <a href="/climate-forward/media-center">Media Center</a>
      </p>
    </div>
  </section>
{/if}

<style>
  .grid {
    padding: 0 0 2rem;
    margin: 1.8rem 0;
    border-bottom: 1px solid var(--current-color-border);
  }

  .grid section + section {
    border: 1px solid var(--current-color-border);
    border-width: 1px 0 0;
    padding-top: 1.7rem;
    margin-top: 2rem;
  }

  @media (min-width: 700px) {
    .grid {
      display: flex;
    }

    .grid section {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: space-between;
      padding-right: 2rem;
      width: 48%;
    }

    .grid section + section {
      border-width: 0 0 0 1px;
      padding: 0 0 0 2rem;
      margin: 0;
      width: 52%;
    }
  }
</style>
