<script>
  import { onMount } from 'svelte'
  export let version = '1'
  let component
  let picture
  let image
  let canplay
  let sources
  let anchors
  let whitedot
  let blackdot
  let video = null
  let began = false
  let scrolldelay = 500

  let supportsPicture = true

  function getSrc(props) {
    let { w, h, q, f } = props
    if (!f) f = 'mp4'
    return `https://res.cloudinary.com/dykmd8idd/video/upload/ac_none,c_crop,w_${w},h_${h},so_0,q_${q},f_auto/v1653133121/climate-events/climate-forward-${version}-2200x990.${f}`
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

  function startNavObserver() {
    anchors = Array.from(
      document.documentElement.querySelectorAll('.Menu a')
    ).filter((link) => {
      return link.href.includes('#')
    })

    for (const link of anchors) {
      link.dataset.delay = scrolldelay
      link.addEventListener('click', stop)
    }
  }

  function endNavObserver() {
    if (!anchors) return
    for (const link of anchors) {
      link.dataset.delay = 0
      link.removeEventListener('click', stop)
    }
  }

  function start() {
    began = true

    window.scrollTo(0, 0)
    window.requestAnimationFrame(function () {
      window.scrollTo(0, 0)
    })

    startNavObserver()
    window.addEventListener('touchmove', lockscroll, { passive: false })
    window.addEventListener('wheel', lockscroll, { passive: false })

    let figure = video ? video : picture

    Promise.all([
      figure.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 800,
        delay: 0,
        fill: 'forwards',
        easing: 'cubic-bezier(0.2, 0, 0.4, 1)'
      }).finished,
      whitedot.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 900,
        delay: 400,
        fill: 'forwards',
        easing: 'cubic-bezier(0.2, 0, 0.5, 1)'
      }).finished
    ])
      .then(function () {
        return Promise.all([
          whitedot.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 800,
            delay: 2900,
            fill: 'forwards',
            easing: 'cubic-bezier(0.4, 0, 0.4, 1)'
          }),
          blackdot.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 800,
            delay: 2900,
            fill: 'forwards',
            easing: 'cubic-bezier(0.4, 0, 0.4, 1)'
          }).finished,
          figure.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 900,
            delay: 2900,
            fill: 'forwards',
            easing: 'cubic-bezier(0.4, 0, 0.4, 1)'
          }).finished,
          blackdot.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 500,
            delay: 3450,
            fill: 'forwards',
            easing: 'cubic-bezier(0.2, 0, 1, 1)'
          }),
          component.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 700,
            delay: 3950,
            fill: 'forwards',
            easing: 'cubic-bezier(0.4, 0, 0.6, 1)'
          }).finished
        ])
      })
      .then(cleanup, cleanup)
  }

  function stop() {
    if (!component) return
    component.style = 'position: absolute;'
    Promise.all([
      component.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: scrolldelay,
        delay: 0,
        fill: 'forwards',
        easing: 'cubic-bezier(0.4, 0, 1, 1)'
      }).finished
    ]).then(cleanup, cleanup)
  }

  function cleanup() {
    window.removeEventListener('touchmove', lockscroll)
    window.removeEventListener('wheel', lockscroll)
    endNavObserver()
    component.classList.add('remove')
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
    video.playsInline = true
    video.loop = true
    video.disablePictureInPicture = true
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

    video.addEventListener('play', start)

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
      if (image.complete) return start()
      image.addEventListener('load', function onload() {
        image.removeEventListener('load', onload)
        start()
      })
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

    return cleanup
  })
</script>

<div class="component" style="display: none" bind:this={component}>
  <div class="canvas">
    <picture bind:this={picture}>
      <source
        srcset={getSrc({ w: 990, h: 990, q: 70 })}
        media="(max-width: 699px)"
        width="990"
        height="990"
        type="video/mp4" />
      <source
        srcset={getSrc({ w: 1485, h: 990, q: 80 })}
        media="(min-width: 700px) and (max-width: 1099px)"
        width="1485"
        height="990"
        type="video/mp4" />
      <source
        srcset={getSrc({ w: 2200, h: 990, q: 80 })}
        media="(min-width: 1100px)"
        width="2200"
        height="990"
        type="video/mp4" />
      <img
        loading="lazy"
        src={getSrc({ w: 990, h: 990, q: 70, f: 'jpg' })}
        alt="" />
      <img
        loading="lazy"
        src={getSrc({ w: 1485, h: 990, q: 70, f: 'jpg' })}
        alt="" />
      <img
        loading="lazy"
        src={getSrc({ w: 2200, h: 990, q: 70, f: 'jpg' })}
        alt="" />
    </picture>
    <div class="dot blackdot" bind:this={blackdot} />
    <div class="dot whitedot" bind:this={whitedot} />
  </div>
</div>

<style>
  .component {
    display: block !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: var(--doc-color-background);
    will-change: opacity;
  }

  .component::after {
    content: '';
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--menu-height);
  }

  :global(.component.remove.remove) {
    display: none !important;
  }

  @supports (min-height: 100dvh) {
    .component {
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
  :global(.component video) {
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
    will-change: opacity;
  }

  picture img {
    width: 100%;
    height: 100%;
    display: none;
    object-fit: cover;
  }

  .dot {
    width: 2.5rem;
    height: 2.5rem;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    will-change: opacity;
  }

  .blackdot {
    background: #000;
    opacity: 0;
    z-index: 1;
    will-change: opacity, transform;
  }

  @media (min-width: 700px) {
    .dot {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 1000px) {
    .dot {
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
