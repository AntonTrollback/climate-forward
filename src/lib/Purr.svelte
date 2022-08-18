<svelte:options tag="nyt-purr" />

<script context="module">
  export const translations = {
    en: {}
  }

  const PURR_SOURCE =
    'https://a1.nyt.com/analytics/purr/v0.0.1-alpha.35/purr.no-poly.min.js'
</script>

<script>
  import { onMount } from 'svelte'
  import { gettext } from './utils/i18n.js'

  const text = gettext(translations)
  const env = import.meta?.env?.DEV ? 'dev' : 'prd'

  let salesOptOutPref
  let dataProcessingConsent
  let dataProcessingChanged = false

  export let useNytRegiCookie = true
  export let autoManageAgentPrefs = env === 'dev'

  function onupdate(directives) {
    salesOptOutPref = directives.PURR_DataSaleOptOutUI_v2
    dataProcessingChanged =
      dataProcessingConsent &&
      dataProcessingConsent !== directives.PURR_DataProcessingConsentUI
    dataProcessingConsent = directives.PURR_DataProcessingConsentUI
  }

  function fetchDirectives() {
    return window.Purr.fetchPurrDirectives({
      env,
      useNytRegiCookie,
      autoManageAgentPrefs
    }).catch(function () {
      return window.Purr.fetchPurrDirectivesWithoutAPI()
    })
  }

  function optout(event) {
    window.Purr.postUserPrivacyPref({ ccpa_pref: 'opt-out' })
      .then(fetchDirectives)
      .then(onupdate)
    event.preventDefault()
  }

  function optin(event) {
    window.Purr.postUserPrivacyPref({ gdpr_pref: 'opt-in' })
      .then(fetchDirectives)
      .then(onupdate)
    event.currentTarget.classList.add('hide')
    event.preventDefault()
  }

  function dismiss(event) {
    dataProcessingConsent = undefined
    event.preventDefault()
  }

  onMount(function () {
    const script = document.createElement('script')
    script.onload = function () {
      window.Purr.refreshPurrCache({
        env,
        useNytRegiCookie,
        autoManageAgentPrefs
      })
        .then(fetchDirectives, fetchDirectives)
        .then(onupdate)
    }
    script.src = PURR_SOURCE
    document.head.append(script)
  })
</script>

<svelte:head>
  <link rel="preload" href={PURR_SOURCE} as="script" />
</svelte:head>

{#if salesOptOutPref === 'show'}
  <button on:click={optout}>
    {text`Do not sell my personal information`}
  </button>
{:else if salesOptOutPref === 'show-opted-out'}
  <span>{text`We no longer sell your personal information`}</span>
  <div class="popup popup--hint">{text`Your preference has been saved.`}</div>
{/if}

{#if dataProcessingChanged}
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
        <button class="btn solid" on:click={optin}>{text`Accept`}</button>
        <a
          class="btn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.nytimes.com/privacy/cookie-policy#how-do-i-manage-trackers">
          {text`Manage Trackers`}
        </a>
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
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    z-index: 3;
    text-align: left;
  }

  .popup *,
  .popup *::before,
  .popup *::after {
    box-sizing: border-box;
  }

  @media print {
    .popup {
      display: none;
    }
  }

  :global(.popup.hide) {
    display: none;
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
    display: inline-block;
    height: auto;
    width: auto;
    max-width: calc(100vw - (var(--doc-margin) * 2));
    padding: 0.75em 0.9em;
    bottom: 0.75rem;
    left: 0.75rem;
    border: 0;
    font-size: 0.8125rem;
    line-height: 1.08;
    white-space: nowrap;
    letter-spacing: var(--doc-letter-spacing-wide);
    -webkit-user-select: none;
    user-select: none;
    pointer-events: none;
    border-radius: 0.125rem;
    background: var(--current-color);
    color: var(--current-color-background);
    animation: popup-show 250ms var(--ease-out) forwards,
      popup-hide 250ms 2000ms var(--ease-in) forwards;
    will-change: opacity;
  }

  .popup--hint.popup--long {
    width: 24.3rem;
    white-space: inherit;
    animation: popup-show 250ms var(--ease-out) forwards,
      popup-hide 250ms 4250ms var(--ease-in) forwards;
  }

  @media (min-width: 500px) {
    .popup--hint {
      right: 0.75rem;
      left: auto;
    }
  }

  @media (min-width: 700px) {
    .popup--hint {
      line-height: 1.12;
      bottom: 1.5rem;
      right: 1.6rem;
      font-size: 0.875rem;
    }
  }

  @keyframes popup-show {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
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
    margin: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
    cursor: pointer;
    position: absolute;
    top: 0.6rem;
    right: 0;
    padding: 0.2rem 1rem 0.4rem;
    border-left: 1px solid var(--current-color-border);
  }

  .dismiss:active {
    color: rgba(0, 0, 0, 0.5);
  }

  .dismiss svg {
    display: inline-block;
    vertical-align: bottom;
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
    min-height: 100%;
    min-height: min-content;
    max-width: 34rem;
    margin-right: auto;
    font-size: 0.7rem;
    line-height: 1.4;
    overflow: auto;
    text-align: left;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  .body p {
    margin: 0;
  }

  .body p + p {
    margin-top: 0.5rem;
  }

  .body a {
    text-decoration: underline;
    color: inherit;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    color: inherit;
    cursor: pointer;
  }

  .body a:active {
    opacity: 0.6;
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

  .btn {
    position: relative;
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 1.25em;
    min-height: 2.75rem;
    border: 1px solid currentColor;
    font-size: 0.875rem;
    line-height: 1;
    text-align: center;
    letter-spacing: var(--doc-letter-spacing-wide);
    text-transform: uppercase;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 0.125rem;
    transition: opacity 250ms var(--ease-out);
    opacity: 1;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    font-family: inherit;
    -webkit-touch-callout: none;
    -webkit-appearance: none;
  }

  .btn:hover {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  .btn:active {
    transition: none;
    opacity: 0.6;
  }

  .btn.solid {
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  .btn:focus-visible {
    outline-width: var(--focus-ring-width) !important;
    outline-color: var(--focus-ring-color) !important;
    outline-offset: var(--focus-ring-width);
  }

  .btn:disabled {
    --current-color: var(--current-color-border);
    --current-color-background: var(--current-color-muted);
    pointer-events: none;
    cursor: not-allowed;
  }
</style>
