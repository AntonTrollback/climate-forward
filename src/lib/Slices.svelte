<script context="module">
  import { graphQuery as sessionFields } from '$lib/Session.svelte'
  import { graphQuery as sponsorFields } from '$lib/Sponsor.svelte'

  export const pageBody = `
    {
      ...on rich_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on about_text {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ...on line {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on scroll_target {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on button {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on iframe {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on section_intro {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsorFields}
        }
      }
      ...on sponsor {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsorFields}
        }
      }
      ...on sponsors {
        repeat {
          ...repeatFields
          sponsor ${sponsorFields}
        }
      }
      ...on events {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
          event {
            ...eventFields
          }
        }
      }
      ...on legal_numbered_text {
        repeat {
          ...repeatFields
        }
      }
    }
  `

  export const eventBody = `
    {
      ...on rich_text {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on about_text {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          ...repeatFields
        }
      }
      ...on line {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on scroll_target {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on button {
        non-repeat {
          ...non-repeatFields
        }
      }
      ...on sponsor {
        non-repeat {
          ...non-repeatFields
          sponsor ${sponsorFields}
        }
      }
      ...on sponsors {
        repeat {
          ...repeatFields
          sponsor ${sponsorFields}
        }
      }
      ...on speakers {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          speaker {
            ...on speaker {
              ...speakerFields
            }
          }
        }
      }
      ...on program {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          session ${sessionFields}
        }
      }
    }
  `
</script>

<script>
  import Button from '$lib/Button.svelte'
  import Divider from '$lib/Divider.svelte'
  import EventList from '$lib/EventList.svelte'
  import Iframe from '$lib/Iframe.svelte'
  import LegalList from '$lib/LegalList.svelte'
  import Program from '$lib/Program.svelte'
  import RichText from '$lib/RichText.svelte'
  import SectionIntro from '$lib/SectionIntro.svelte'
  import Speakers from '$lib/Speakers.svelte'
  import Sponsor from '$lib/Sponsor.svelte'
  import Sponsors from '$lib/Sponsors.svelte'
  export let slices
</script>

{#each slices as slice, index}
  <div id={slice.primary.slice_id || `${slice.slice_type}-${index}`}>
    {#if slice.slice_type === 'events'}
      <div class="u-container">
        <EventList
          props={slice.primary}
          events={slice.items
            .map((item) => item.event)
            .filter((event) => !event.isBroken)} />
      </div>
    {/if}

    {#if slice.slice_type === 'sponsor'}
      <div class="u-container">
        <Sponsor
          label={slice.primary.sponsor_label}
          org={slice.primary.sponsor.data} />
      </div>
    {/if}

    {#if slice.slice_type === 'iframe'}
      <Iframe src={slice.primary.url} />
    {/if}

    {#if slice.slice_type === 'sponsors'}
      <Sponsors items={slice.items.filter((sponsor) => !sponsor.isBroken)} />
    {/if}

    {#if slice.slice_type === 'button'}
      <div class="u-container">
        <Button class="u-spaceTopSm" document={slice.primary.link}>
          {slice.primary.link_text}
        </Button>
      </div>
    {/if}

    {#if slice.slice_type === 'rich_text'}
      <div class="u-container">
        <RichText
          size={slice.primary.size === 'Small'
            ? 'sm'
            : slice.primary.size === 'Large'
            ? 'lg'
            : slice.primary.size === 'Extra large'
            ? 'xl'
            : ''}
          fields={slice.primary.text} />
      </div>
    {/if}

    {#if slice.slice_type === 'about_text'}
      <div class="u-container">
        <RichText
          title={slice.primary.heading}
          fields={slice.primary.main_text}
          collapsed={slice.primary.extra_text}
          questions={slice.items}
          limit={slice.primary.item_limit} />
      </div>
    {/if}

    {#if slice.slice_type === 'line'}
      <Divider
        size={slice.primary.size === 'Extra small'
          ? 'xs'
          : slice.primary.size === 'Small'
          ? 'sm'
          : slice.primary.size === 'Medium'
          ? 'md'
          : slice.primary.size === 'Large'
          ? 'lg'
          : slice.primary.size === 'Extra large'
          ? 'xl'
          : ''}
        solid={slice.primary.solid}
        contain={slice.primary.contain} />
    {/if}

    {#if slice.slice_type === 'section_intro'}
      <div class="u-container">
        <SectionIntro content={slice.primary} />
      </div>
    {/if}

    {#if slice.slice_type === 'legal_numbered_text'}
      <div class="u-container">
        <LegalList items={slice.items} />
      </div>
    {/if}

    {#if slice.slice_type === 'speakers'}
      <div class="u-container">
        <Speakers
          limit={slice.primary.limit}
          items={slice.items
            .map((item) => item.speaker)
            .filter((speaker) => !speaker.isBroken)} />
      </div>
    {/if}

    {#if slice.slice_type === 'program'}
      <div class="u-container">
        <Program
          sessions={slice.items
            .map((item) => item.session)
            .filter((session) => !session.isBroken)} />
      </div>
    {/if}
  </div>
{/each}
