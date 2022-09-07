<script>
  import { onMount } from 'svelte'
  import whitespace from './utils/whitespace.js'
  export let prefix
  export let title
  export let date
  export let color
  let picture
  let image
  let video
  let canplay
  let sources
  let supportsPicture = true

  let theme

  switch (color) {
    case 'Blue': {
      theme = {
        id: 'v1662479091',
        file: 'nyc',
        items: [
          {
            opts: { w: 1000, h: 1400, q: [65, 70] },
            media: '(max-width: 499px)'
          },
          {
            opts: { w: 1200, h: 1200, q: [70, 75] },
            media: '(min-width: 500px) and (max-width: 699px)'
          },
          {
            opts: { w: 1800, h: 1200, q: [80, 85] },
            media: '(min-width: 700px) and (max-width: 1099px)'
          },
          {
            opts: { w: 2200, h: 1000, q: [85, 90] },
            media: '(min-width: 1100px)'
          }
        ]
      }
      break
    }
    case 'Teal': {
      theme = {
        id: 'v1662134411',
        file: 'sharm',
        items: [
          {
            opts: { w: 1000, h: 1400, q: [65, 70] },
            media: '(max-width: 499px)'
          },
          {
            opts: { w: 1200, h: 1200, q: [70, 75] },
            media: '(min-width: 500px) and (max-width: 699px)'
          },
          {
            opts: { w: 1800, h: 1200, q: [80, 85] },
            media: '(min-width: 700px) and (max-width: 1099px)'
          },
          {
            opts: { w: 2200, h: 1000, q: [85, 90] },
            media: '(min-width: 1100px)'
          }
        ]
      }
      break
    }
    case 'Orange': {
      theme = {
        id: 'v1662134411',
        file: 'sfo',
        items: [
          {
            opts: { w: 1000, h: 1400, q: [65, 70] },
            media: '(max-width: 499px)'
          },
          {
            opts: { w: 1200, h: 1200, q: [70, 75] },
            media: '(min-width: 500px) and (max-width: 699px)'
          },
          {
            opts: { w: 1800, h: 1200, q: [80, 85] },
            media: '(min-width: 700px) and (max-width: 1099px)'
          },
          {
            opts: { w: 2200, h: 1000, q: [85, 90] },
            media: '(min-width: 1100px)'
          }
        ]
      }
      break
    }
    default: {
      theme = {
        id: 'v1662134411',
        file: 'climate-forward',
        items: [
          {
            opts: { w: 1000, h: 1400, q: [65, 70] },
            media: '(max-width: 499px)'
          },
          {
            opts: { w: 1080, h: 1080, q: [70, 75] },
            media: '(min-width: 500px) and (max-width: 699px)'
          },
          {
            opts: { w: 1800, h: 1200, q: [80, 85] },
            media: '(min-width: 700px) and (max-width: 1099px)'
          },
          {
            opts: { w: 2200, h: 1000, q: [85, 90], suffix: 'updated' },
            media: '(min-width: 1100px)'
          }
        ]
      }
    }
  }

  function getSrc(props) {
    let { w, h, q, f, suffix = '1' } = props
    if (!f) f = 'jpg'
    let res = 'https://res.cloudinary.com/dykmd8idd/video/upload/'
    res += `ac_none,c_crop,w_${w},h_${h},so_0,q_${q[0]}:qmax_${q[1]},f_auto`
    res += `/${theme.id}/climate-events/${theme.file}-${suffix}-${w}x${h}.${f}`
    return res
  }

  function debounce(fn) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(fn, 10, ...args)
    }
  }

  function getCurrentSource() {
    return sources.reduce(function (match, source) {
      if (!source.media) return source
      return window.matchMedia(source.media).matches ? source : match
    }, null)
  }

  function createVideo() {
    const source = getCurrentSource()
    video = document.createElement('video')
    video.controls = false
    video.autoplay = true
    video.muted = true
    video.playsinline = true
    video.loop = true
    video.disablepictureinpicture = true
    video.preload = 'auto'
    video.poster =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    video.width = source.width
    video.height = source.height
    let descendant = document.createElement('source')
    descendant.src = source.srcset.replace('.jpg', '.mp4')
    descendant.type = 'video/mp4'
    video.append(descendant)

    canplay = new Promise(function (resolve) {
      video.addEventListener('canplay', function oncanplay() {
        video.removeEventListener('canplay', oncanplay)
        resolve()
      })

      video.addEventListener('play', function () {
        // Fix Safari video glitch
        setTimeout(function () {
          video.currentTime = 0
          video.style = 'opacity: 1'
        }, 0)
      })
    })

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
    // supportsPicture = srcsets.includes(image.currentSrc)
    supportsPicture = false

    if (!supportsPicture) {
      picture.replaceWith(createVideo())
      let current = getCurrentSource()
      window.addEventListener(
        'resize',
        debounce(function () {
          const potential = getCurrentSource()
          if (potential !== current) {
            current = potential
            video.replaceWith(createVideo())
            if (isPlaying) {
              canplay.then(() => video.play().catch(Function.prototype))
            }
          }
        })
      )
    }
  })
</script>

<div class="VideoBanner {color ? 'alternative' : ''}">
  <div class="sizer" />
  <div class="content">
    <div class="sizer" />
    {#each theme.items as item}
      <img
        loading="eager"
        class="loading"
        src={getSrc({ ...item.opts, f: 'jpg' })}
        alt="" />
    {/each}
    <picture bind:this={picture}>
      {#each theme.items as item}
        <source
          srcset={getSrc(item.opts)}
          media={item.media}
          width={item.opts.w}
          height={item.opts.h} />
      {/each}
      {#each theme.items as item}
        <img loading="eager" src={getSrc({ ...item.opts, f: 'jpg' })} alt="" />
      {/each}
    </picture>

    {#if color}
      <div class="body">
        <div class="u-container">
          <div class="Text Text--xl Text--spaced">
            <h1 class="Text-h2 Text-bump">
              {@html whitespace(prefix)}<br />
              <em>{@html whitespace(title)}<br />{@html whitespace(date)}</em>
            </h1>
          </div>
          <slot />
        </div>
      </div>
    {:else}
      <div class="logo">
        <svg fill="none" height="57" viewBox="0 0 638 57" width="638"
          ><g fill="#fff"
            ><path
              d="m21.0759 25.8314c0-9.081 2.7942-13.0394 6.9854-13.0394 3.7255 0 5.4331 3.1046 5.9764 9.3914h14.5917v-20.8785h-14.2037v2.25084c-2.8717-2.32846-6.2092-3.259842-10.5556-3.259842-13.0394 0-23.362288 10.090002-23.362288 27.010202 0 8.8481 2.949388 16.2216 8.149618 21.3442 5.27787 5.1226 12.72897 8.072 21.80997 8.072 6.442 0 11.7975-1.0866 17.7739-4.3465v-14.9021c-5.5107 3.8031-9.081 4.8121-13.0394 4.8121-3.3375 0-6.8302-1.3194-9.4691-3.9584-2.7941-2.7941-4.6569-6.9077-4.6569-12.496z" /><path
              d="m52.8018 45.6233v10.09h23.8279v-10.09h-3.1822v-44.3184h-20.6457v10.09h3.1046v34.2284z" /><path
              d="m82.4424 1.3049v13.2722h17.5411v-13.2722zm-3.1046 44.3184v10.09h23.9052v-10.09h-3.2595v-27.1654h-20.6457v10.09h3.1046v17.0754z" /><path
              d="m105.866 45.6233v10.09h23.363v-10.09h-2.717v-12.6513c0-2.7166 1.164-4.4241 3.105-4.4241 1.785 0 3.027 1.7852 3.027 4.4241v22.7413h20.18v-10.09h-2.639v-12.4961c0-3.1046 1.009-4.5793 2.949-4.5793 2.018 0 3.182 1.6299 3.182 4.5793v22.5861h20.646v-10.09h-3.104v-15.9888c0-6.7525-5.201-11.9527-12.885-11.9527-4.113 0-7.451 1.397-12.185 5.1226-3.648-3.8032-6.442-5.1226-11.099-5.1226-3.803 0-6.365 1.1642-11.177 4.8121v-4.036h-20.646v10.09h3.105v17.0754z" /><path
              d="m204.065 51.9878v3.7255h20.879v-10.09h-3.26v-14.6693c0-6.2092-5.511-13.2722-21.655-13.2722-7.529 0-12.651 1.0866-17.619 2.406v9.7796c3.959-1.8628 7.684-2.9494 12.264-2.9494 5.898 0 9.081 2.7165 9.236 6.9078-2.794-1.4747-5.976-2.4837-10.012-2.4837-9.237 0-15.058 4.8121-15.058 12.7289 0 7.7615 4.967 12.3408 13.428 12.3408 4.501 0 8.848-1.1642 11.797-4.424zm-3.803-4.8898c-2.794 0-4.346-1.1642-4.346-3.8032 0-2.7165 1.785-4.036 4.424-4.036 2.561 0 3.958 1.3195 3.958 3.9584 0 2.7166-1.397 3.8808-4.036 3.8808z" /><path
              d="m229.632 28.5479v27.1654h22.741v-10.09h-5.2v-17.0754h5.2v-10.09h-5.2v-11.64231h-17.541v11.64231h-3.493v10.09z" /><path
              d="m296.865 43.9158h-12.186c-1.552 2.018-3.182 3.2598-5.821 3.2598-3.57 0-5.899-1.9404-6.365-6.2868h24.372c.077-1.2419.155-2.4061.155-3.648 0-10.7109-8.305-19.559-20.879-19.559-11.564 0-21.266 7.063-21.266 19.2486 0 5.6659 2.173 10.7109 6.442 14.5141 4.346 3.8807 10.555 5.045 16.144 5.045 9.003 0 16.842-4.036 19.404-12.5737zm-24.061-13.1947c.698-1.8627 2.173-2.9493 4.191-2.9493 3.803 0 4.579 3.2598 4.579 6.442v.9314h-9.158c0-1.9404-.078-3.3374.388-4.4241z" /><path
              d="m348.325 43.7605h-6.52v-10.9437h8.227v-8.6154h-8.227v-10.9437h9.392v6.6749h12.573v-18.6277h-47.267v11.9528h5.2v30.5028h-5.2v11.9528h31.822z" /><path
              d="m357.958 37.1632c0 12.5737 11.021 19.3263 22.586 19.3263 11.564 0 22.353-6.675 22.353-19.2487 0-12.8065-10.556-19.559-22.431-19.559-11.72 0-22.508 6.8301-22.508 19.4814zm27.398.2329c0 3.3374-.621 8.5377-5.045 8.5377s-4.812-6.5197-4.812-9.6244c0-3.1046.621-8.5376 4.812-8.5376 4.812 0 5.045 6.1316 5.045 9.6243z" /><path
              d="m405.717 45.6233v10.09h24.837v-10.09h-4.192v-3.7255c0-4.2689.233-5.8212.932-7.1407 1.009-1.7075 2.871-3.027 5.2-3.5703 2.173-.5433 3.958-.6209 8.305-.6209v-12.8841c-.699-.0777-1.475-.0777-2.173-.0777-5.201 0-8.926 3.027-12.264 6.5973v-5.7435h-20.645v10.09h3.104v17.0754z" /><path
              d="m474.251 38.1722 6.054 17.5411h14.592l8.537-27.1654h1.475v-10.09h-14.126v10.09h2.173l-3.26 11.2542h-.155l-6.364-21.3442h-10.789l-8.227 21.3442h-.155l-1.785-11.2542h2.716v-10.09h-21.111v10.09h2.406l6.83 27.1654h14.048z" /><path
              d="m528.852 51.9878v3.7255h20.879v-10.09h-3.26v-14.6693c0-6.2092-5.511-13.2722-21.655-13.2722-7.528 0-12.651 1.0866-17.618 2.406v9.7796c3.958-1.8628 7.684-2.9494 12.263-2.9494 5.899 0 9.081 2.7165 9.236 6.9078-2.794-1.4747-5.976-2.4837-10.012-2.4837-9.237 0-15.058 4.8121-15.058 12.7289 0 7.7615 4.968 12.3408 13.428 12.3408 4.501 0 8.848-1.1642 11.797-4.424zm-3.803-4.8898c-2.794 0-4.346-1.1642-4.346-3.8032 0-2.7165 1.785-4.036 4.424-4.036 2.561 0 3.958 1.3195 3.958 3.9584 0 2.7166-1.397 3.8808-4.036 3.8808z" /><path
              d="m552.231 45.6233v10.09h24.837v-10.09h-4.191v-3.7255c0-4.2689.232-5.8212.931-7.1407 1.009-1.7075 2.872-3.027 5.2-3.5703 2.173-.5433 3.959-.6209 8.305-.6209v-12.8841c-.699-.0777-1.475-.0777-2.173-.0777-5.2 0-8.926 3.027-12.263 6.5973v-5.7435h-20.646v10.09h3.104v17.0754z" /><path
              d="m588.609 36.8528c0 9.7795 5.278 19.6367 16.144 19.6367 4.735 0 7.684-1.63 11.565-4.1913v3.4151h20.801v-10.09h-3.26v-44.3184h-21.732v10.09h4.191v10.1676c-3.415-2.5613-6.597-3.8807-10.944-3.8807-10.866 0-16.765 9.081-16.765 19.171zm28.02-.4657c0 3.5703-.777 9.5467-5.434 9.5467-4.656 0-5.044-5.7436-5.044-9.1587 0-3.3374.931-9.0033 5.355-9.0033 4.114 0 5.123 5.5106 5.123 8.6153z" /></g
          ></svg>
      </div>
    {/if}
  </div>
</div>

<style>
  .VideoBanner {
    position: relative;
    width: 100%;
    margin: 0 0 var(--space-block-sm);
    background: var(--doc-color-background);
    max-height: calc(
      100vh - var(--menu-height) - var(--space-block-sm) - 1.8rem
    );
    min-height: 19rem;
    overflow: hidden;
    margin-top: var(--menu-height);
  }

  .alternative {
    margin-bottom: 0;
  }

  picture {
    opacity: 0;
  }

  :global(.VideoBanner video) {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    user-select: none;
    pointer-events: none;
    background: transparent;
    opacity: 0;
    transition: opacity 300ms;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    /* transform: translateY(-50%); */
    transform: translateY(calc(-50% + (15% * var(--scroll))));
    overflow: hidden;
  }

  .body {
    --current-color: #fff;
    --current-color-background: #000;
    color: var(--current-color);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 499px) {
    .sizer {
      padding-bottom: calc((1400 / 1000) * 100%);
    }
  }

  @media (min-width: 500px) and (max-width: 699px) {
    .sizer {
      padding-bottom: calc((1080 / 1080) * 100%);
    }
  }

  @media (min-width: 700px) and (max-width: 1099px) {
    .sizer {
      padding-bottom: calc((1200 / 1800) * 100%);
    }
  }

  @media (min-width: 1100px) {
    .sizer {
      padding-bottom: calc((1000 / 2200) * 100%);
    }
  }

  picture img,
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
    height: auto;
    display: none;
  }

  .logo svg {
    position: absolute;
    width: auto;
    height: 2.9rem !important;
    top: calc(50% + 0.75rem);
    left: var(--doc-margin);
    z-index: 1;
    transform: translateY(-80%);
  }

  @media (min-width: 1350px) {
    .logo svg {
      height: 3.6rem !important;
    }
  }

  @media (min-width: 1450px) {
    .logo svg {
      height: 3.95rem !important;
      top: calc(50% + 1.2rem);
    }
  }

  .logo::after {
    content: '';
    width: 3.5rem;
    height: 3.5rem;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media (min-width: 400px) {
    .logo::after {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  @media (min-width: 700px) {
    .logo::after {
      width: 5rem;
      height: 5rem;
    }
  }

  .logo svg {
    display: none;
  }

  @media (min-width: 1100px) {
    .logo svg {
      display: block;
    }

    .logo::after {
      left: 64.4%;
    }
  }

  picture img:nth-child(5),
  .loading:nth-child(2) {
    display: block;
  }

  @media (min-width: 500px) {
    picture img:nth-child(5),
    .loading:nth-child(2) {
      display: none;
    }
    picture img:nth-child(6),
    .loading:nth-child(3) {
      display: block;
    }
  }

  @media (min-width: 700px) {
    picture img:nth-child(6),
    .loading:nth-child(3) {
      display: none;
    }
    picture img:nth-child(7),
    .loading:nth-child(4) {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    picture img:nth-child(7),
    .loading:nth-child(4) {
      display: none;
    }
    picture img:nth-child(8),
    .loading:nth-child(5) {
      display: block;
    }
  }
</style>
