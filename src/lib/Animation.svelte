<script>
  import { onMount } from 'svelte'
  export let version = '1'
  let root
  let picture
  let image
  let video
  let canplay
  let sources
  let anchors
  let began = false
  let locked = true

  let supportsPicture = true

  function getSrc(props) {
    let { w, h, q, f } = props
    if (!f) f = 'mp4'
    return `https://res.cloudinary.com/dykmd8idd/video/upload/ac_none,c_crop,w_${w},h_${h},so_0,q_${q},f_auto/v1653133121/climate-events/climate-forward-${version}-${w}x${h}.${f}`
  }

  function debounce(fn) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(fn, 100, ...args)
    }
  }

  function lockscroll(event) {
    event.preventDefault()
  }

  function animate() {
    began = true

    window.scrollTo(0, 0)
    window.requestAnimationFrame(function () {
      window.scrollTo(0, 0)
    })

    startNavObserver()
    window.addEventListener('touchmove', lockscroll, { passive: false })
    window.addEventListener('wheel', lockscroll, { passive: false })
    root.classList.add('in')
    setTimeout(function () {
      root.classList.add('out')

      setTimeout(function () {
        done()
      }, 3000)
    }, 3000)
  }

  function startNavObserver() {
    anchors = Array.from(
      document.documentElement.querySelectorAll('.Menu a')
    ).filter((link) => {
      return link.href.includes('#')
    })

    for (const link of anchors) {
      link.addEventListener('click', stop)
    }
  }

  function endNavObserver() {
    if (!anchors) return
    for (const link of anchors) {
      link.removeEventListener('click', stop)
    }
  }

  function done(opts = {}) {
    window.removeEventListener('touchmove', lockscroll)
    window.removeEventListener('wheel', lockscroll)
    endNavObserver()
    root.classList.add('done')
    if (opts?.force) root.classList.add('fast')
    root.addEventListener('transitionend', function () {
      root.classList.add('remove')
    })
  }

  function stop() {
    done({ force: true })
  }

  function createVideo() {
    const source = sources.reduce(function (match, source) {
      if (!source.media) return source
      return window.matchMedia(source.media).matches ? source : match
    }, null)

    video = document.createElement('video')
    video.controls = false
    video.autoplay = true
    video.muted = true
    video.playsinline = true
    video.loop = true
    video.disablepictureinpicture = true
    video.preload = 'auto'
    video.poster = image.src
    video.width = source.width
    video.height = source.height
    let descendant = document.createElement('source')
    descendant.src = source.srcset
    descendant.type = 'video/mp4'
    video.append(descendant)

    canplay = new Promise(function (resolve) {
      video.addEventListener('canplay', function oncanplay() {
        video.removeEventListener('canplay', oncanplay)
        resolve()
      })
    })

    video.addEventListener('play', animate)

    return video
  }

  onMount(function () {
    if (typeof window.matchMedia !== 'function') return
    let isPlaying = false

    image = Array.from(picture.querySelectorAll('img')).find(
      (img) => window.getComputedStyle(img, null).display !== 'none'
    )
    sources = [...picture.querySelectorAll('source')]
    const srcsets = sources.map((source) => source.srcset)
    supportsPicture = srcsets.includes(image.currentSrc)

    if (supportsPicture) {
      // Safari mp4 in img tag
      if (image.complete) return animate()
      image.addEventListener('load', animate)
    } else {
      picture.replaceWith(createVideo())
      window.addEventListener(
        'resize',
        debounce(function () {
          video.replaceWith(createVideo())
          if (isPlaying) {
            canplay.then(() => video.play().catch(Function.prototype))
          }
        })
      )
    }

    // fail-safe
    setTimeout(function () {
      if (!began) stop()
    }, 2000)
  })
</script>

<div class="Animation" bind:this={root}>
  <div class="canvas">
    <picture bind:this={picture}>
      <source
        srcset={getSrc({ w: 1080, h: 1080, q: 70 })}
        media="(max-width: 699px)"
        width="1080"
        height="1080"
        type="video/mp4" />
      <source
        srcset={getSrc({ w: 1800, h: 1200, q: 80 })}
        media="(min-width: 700px) and (max-width: 1099px)"
        width="1800"
        height="1200"
        type="video/mp4" />
      <source
        srcset={getSrc({ w: 2200, h: 990, q: 80 })}
        media="(min-width: 1100px)"
        width="2200"
        height="990"
        type="video/mp4" />
      <img
        loading="lazy"
        src={getSrc({ w: 1080, h: 1080, q: 70, f: 'jpg' })}
        alt="" />
      <img
        loading="lazy"
        src={getSrc({ w: 1800, h: 1200, q: 70, f: 'jpg' })}
        alt="" />
      <img
        loading="lazy"
        src={getSrc({ w: 2200, h: 990, q: 70, f: 'jpg' })}
        alt="" />
    </picture>
    <div class="dot" />
  </div>
</div>

<style>
  .Animation {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: var(--doc-color-background);
  }

  :global(.Animation.done) {
    opacity: 0;
    transition: opacity 3000ms var(--ease-out) !important;
  }

  :global(.Animation.fast) {
    transition: opacity 250ms var(--ease-out) !important;
  }

  :global(.Animation.remove) {
    display: none;
  }

  @supports (min-height: 100dvh) {
    .Animation {
      height: 100dvh;
    }
  }

  .canvas {
    max-height: calc(100% - (var(--doc-margin) * 2));
    width: calc(100% - (var(--doc-margin) * 2));
    position: absolute;
    top: 50%;
    left: var(--doc-margin);
    overflow: hidden;
    transform: translateY(-50%);
  }

  .canvas::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  picture,
  :global(.Animation video) {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    user-select: none;
    pointer-events: none;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 1300ms var(--ease);
  }

  :global(.Animation.in picture),
  :global(.Animation.in video) {
    opacity: 1 !important;
  }

  :global(.Animation.out picture),
  :global(.Animation.out video) {
    opacity: 0 !important;
    transition: opacity 1200ms 700ms var(--ease-out) !important;
  }

  picture img {
    width: 100%;
    height: 100%;
    display: none;
    object-fit: cover;
  }

  .dot,
  .dot::after {
    width: 2rem;
    height: 2rem;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    transition: opacity 1200ms 700ms var(--ease);
  }

  .dot::after {
    content: '';
    background: #000;
    opacity: 0;
    transform: none;
    top: 0;
    left: 0;
  }

  :global(.Animation.in .dot) {
    opacity: 1 !important;
  }

  :global(.Animation.out .dot::after) {
    opacity: 1 !important;
    transition: opacity 1200ms 700ms var(--ease) !important;
  }

  @media (min-width: 700px) {
    .dot,
    .dot::after {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 1000px) {
    .dot,
    .dot::after {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  picture img:nth-child(4) {
    display: block;
  }

  @media (min-width: 700px) {
    picture img:nth-child(4) {
      display: none;
    }
    picture img:nth-child(5) {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    picture img:nth-child(5) {
      display: none;
    }
    picture img:nth-child(6) {
      display: block;
    }
  }
</style>
