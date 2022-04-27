<script context="module">
  export const MODAL = Symbol('MODAL')
</script>

<section class="Modal">
  <div class="Modal-window">
    <div class="Modal-close">
      <slot name="close" />
    </div>
    <slot />
  </div>
</section>

<style>
  .Modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Modal-window {
    position: relative;
    background: white;
    width: 100%;
    max-width: 800px;
    overflow: auto;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
</style>
