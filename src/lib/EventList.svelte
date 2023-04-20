<script>
  import RichText from './RichText.svelte'
  import Link from './Link.svelte'
  import Previous from './Previous.svelte'
  import Divider from './Divider.svelte'
  import { asText } from '@prismicio/helpers'
  import resolve from './utils/resolve.js'
  export let items
  export let props = { large: false }
  let { large } = props
</script>

<ol>
  {#each items as item, index}
    <li class:shift={!large}>
      {#if index !== 0}
        <Divider solid="true" size="lg" />
      {/if}
      <div class="content">
        <Link class="eventlink" document={item.event}>
          {#if !large}
            <div class="Text u-spaceSm Text--sm">
              <p class="Text-p">{item.event.data.date}</p>
            </div>
          {/if}
          <h2 class="{large ? 'Text-h1' : 'linked Text-h4 u-spaceXs'} u-fill">
            {asText(item.event.data.name)}
          </h2>
          {#if large}
            <span class="Text-h1 u-fill"><em>{item.event.data.date}</em></span>
          {/if}
        </Link>
        <RichText
          size={large ? 'md' : 'sm'}
          class={'u-spaceLg'}
          fields={item.event.data.description} />

        {#if item.event.data.sessions.length > 0}
          <Previous
            limit={4}
            hardlimit
            sessions={item.event.data.sessions
              .map(function (thing) {
                thing.session.highlight = thing.highlight
                thing.session.href = resolve(
                  thing.session,
                  `${item.event.uid}/sessions`
                )
                return thing.session
              })
              .filter((session) => session.id && !session.isBroken)} />
        {/if}
        <div class="action">
          <Link document={item.event} class="u-expand u-expandArrow"
            >{item.link_text}</Link>
        </div>
      </div>
    </li>
  {/each}
</ol>

<style>
  .action {
    padding-top: 0.5rem;
    border-top: 1px solid var(--current-color-border);
    margin-top: var(--space-grid);
  }

  :global(.eventlink):hover .linked {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
    transition: opacity 250ms var(--ease-out);
  }

  :global(.eventlink):active .linked {
    transition: none;
    opacity: 0.5;
  }
</style>
