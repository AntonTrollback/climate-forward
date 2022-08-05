<script context="module">
  import { writable } from 'svelte/store'

  export let sections = {}
  export const active = writable()
</script>

<script>
  import { onMount } from 'svelte'
  export let id = 'start'
  let target

  active.set(null)

  onMount(function () {
    if (!('IntersectionObserver' in window)) return
    let observer
    sections[id] = null

    function intersect(context) {
      let vh = window.innerHeight
      if (!context[0].isIntersecting) sections[id] = null
      sections[id] = context[0].intersectionRect.height
      active.set(
        Object.keys(sections).reduce((a, b) => {
          if (sections[a] > sections[b]) {
            if (sections[a] > vh * 0.25) return a
          }
          if (sections[b] > vh * 0.25) return b
          return null
        })
      )
    }

    observer = new IntersectionObserver(intersect, {
      threshold: [0, 0.05, 0.2, 0.4, 0.6, 0.8, 0.95, 1]
    })
    observer.observe(target)

    return () => {
      observer.unobserve(target)
      active.set(null)
    }
  })
</script>

<section {id} bind:this={target}>
  <slot />
</section>
