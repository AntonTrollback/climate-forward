<script context="module">
  export const translations = {
    en: {}
  }

  const PURR_SOURCE =
    'https://a1.nyt.com/analytics/purr/v0.0.1-alpha.35/purr.no-poly.min.js'
</script>

<script>
  import { onMount } from 'svelte'
  import Button from '$lib/Button.svelte'
  import { gettext } from '$lib/utils/i18n.js'

  const text = gettext(translations)

  let salesOptOutPref
  let dataProcessingConsent

  const ops = {
    env: import.meta.PROD ? 'prd' : 'dev',
    useNytRegiCookie: false
  }

  function onupdate(directives) {
    salesOptOutPref = directives.PURR_DataSaleOptOutUI_v2
    dataProcessingConsent = directives.PURR_DataProcessingConsentUI
  }

  function fetchDirectives() {
    return window.Purr.fetchPurrDirectives({ ops }).catch(function () {
      return window.Purr.fetchPurrDirectivesWithoutAPI()
    })
  }

  function save(props) {
    return function (event) {
      Purr.postUserPrivacyPref(props).then(fetchDirectives).then(onupdate)
      event.preventDefault()
    }
  }

  function dismiss(event) {
    dataProcessingConsent = undefined
    event.preventDefault()
  }

  onMount(function () {
    const script = document.createElement('script')
    script.onload = function () {
      window.Purr.refreshPurrCache({ ops })
        .then(fetchDirectives, fetchDirectives)
        .then(onupdate)
    }
    script.src = PURR_SOURCE
    document.head.append(script)
  })
</script>

<svelte:head>
  <script rel="preload" as="script" src={PURR_SOURCE}></script>
</svelte:head>

{#if salesOptOutPref === 'show'}
  <button on:click={save({ ccpa_pref: 'opt-out' })}>
    {text`Do not sell my personal information`}
  </button>
{:else if salesOptOutPref === 'show-opted-out'}
  <span>{text`We no longer sell your personal information`}</span>
  <div class="popup popup--hint">{text`Your preference has been saved.`}</div>
{/if}

{#if dataProcessingConsent === 'hide'}
  <div class="popup popup--hint popup--long">
    {text`Your preference will be stored for this browser and device. If you clear your cookies, your preference will be forgotten.`}
  </div>
{:else if dataProcessingConsent === 'show'}
  <div class="popup popup--takeover">
    <div class="header">
      <strong class="title">
        {text`Your tracker settings`}
      </strong>
      <button on:click={dismiss} class="dismiss" aria-label={text`Dismiss`}>
        <svg width="15" height="15">
          <g fill="none">
            <path
              d="M2 2l11 11"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke="currentColor" />
            <path
              d="M13 2L2 13"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke="currentColor" />
          </g>
        </svg>
      </button>
    </div>
    <div class="content">
      <div class="body">
        <p>
          {text`We use cookies and similar methods to recognize visitors and
          remember their preferences. We also use them to measure ad campaign
          effectiveness, target ads and analyze site traffic. To learn more about
          these methods, including how to disable them`},
          <a
            href="https://www.nytimes.com/privacy/cookie-policy"
            rel="noreferrer noopener"
            target="_blank">
            {text`view our Cookie Policy`}
          </a>.
        </p>
        <p>
          {text`Starting on July 20, 2020 we will show you ads we think are
          relevant to your interests, based on the kinds of content you access in
          our Services. You can`}
          <a
            href="https://www.nytimes.com/privacy/cookie-policy#how-do-i-manage-trackers"
            rel="noreferrer noopener"
            target="_blank">
            {text`object`}
          </a>. {text`For more info, see our`}
          <a
            href="https://nytimes.com/privacy/privacy-policy#we-allow-for-personalized-advertising-on-times-services"
            rel="noreferrer noopener"
            target="_blank">
            {text`privacy policy`}
          </a>.
        </p>
        <p>
          {text`By tapping ‘accept,’ you consent to the use of these methods by
          us and third parties. You can always change your tracker preferences
          by visiting our Cookie Policy.`}
        </p>
      </div>
      <div class="actions">
        <Button solid on:click={save({ gdpr_pref: 'opt-in' })}>
          {text`Accept`}
        </Button>
        <Button
          solid
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.nytimes.com/privacy/cookie-policy#how-do-i-manage-trackers">
          {text`Manage Trackers`}
        </Button>
      </div>
    </div>
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-height: 17rem;
    padding: 1.2rem 1rem;
    background: var(--current-color-background);
    border-top: 1px solid;
    text-align: left;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  @media (min-width: 400px) {
    .popup {
      max-height: 16.1rem;
    }
  }

  @media (min-width: 500px) {
    .popup {
      max-height: 14.2rem;
    }
  }

  .popup--hint {
    bottom: 1rem;
    right: 1rem;
    border: 0;
    font-size: 0.875rem;
    line-height: 1.1;
    text-align: right;
    width: 15.3rem;
    max-width: calc(100vw - (var(--doc-margin) * 2));
    letter-spacing: 0.065em;
    user-select: none;
    border-radius: 0.125rem;
    background: var(--current-color);
    color: var(--current-color-background);
    padding: 0.78rem 0.7rem;
    animation: popup-hide 300ms 4500ms var(--ease-in) forwards;
    pointer-events: none;
    will-change: opacity;
    display: inline-block;
    height: auto;
    left: auto;
  }

  .popup--hint.popup--long {
    width: 26.2rem;
  }

  @media (min-width: 700px) {
    .popup--hint {
      padding: 1.2rem 1.3rem;
      font-size: 0.9rem;
      width: 16.8rem;
    }

    .popup--hint.popup--long {
      width: 28.1rem;
    }
  }

  @keyframes popup-hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(2rem);
    }
  }

  .popup--takeover {
    opacity: 0;
    transform: translateY(5rem);
    animation: popup-show 200ms 6000ms var(--ease-out) forwards;
  }

  @keyframes popup-show {
    from {
      opacity: 0;
      transform: translateY(5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .header {
    display: flex;
    width: 100%;
    margin-bottom: 1.2rem;
    font-size: 0.9rem;
  }

  .dismiss {
    position: absolute;
    top: 0.6rem;
    right: 0;
    padding: 0.2rem 1rem 0.4rem;
    border-left: 1px solid var(--current-color-border);
  }

  .dismiss:active {
    color: rgba(0, 0, 0, 0.5);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
  }

  @media (min-width: 500px) {
    .content {
      flex-direction: row;
    }
  }

  .body {
    flex: 0 1 auto;
    height: 100%;
    max-width: 34rem;
    margin-right: auto;
    font-size: 0.7rem;
    line-height: 1.4;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  .body p + p {
    margin-top: 0.5rem;
  }

  .body a {
    text-decoration: underline;
  }

  .actions {
    flex: 0 1 auto;
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 500px) {
    .actions {
      flex-direction: column;
    }
  }
</style>
