<script>
  import { onMount } from 'svelte'
  export let id
	let target

  onMount(function () {
    if (!'IntersectionObserver' in window) return
    let observer

    function now (context) {
      if (context[0].isIntersecting) {
        console.log(id, ' is active')
      }
    }

    observer = new IntersectionObserver(now, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    })
    observer.observe(target)
    return () => observer.unobserve(target)
  })
</script>

<div id={id} bind:this={target} />
