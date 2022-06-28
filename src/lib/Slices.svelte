<script>
  import { onMount } from 'svelte'
  import Animation from './Animation.svelte'
  import Button from './Button.svelte'
  import Divider from './Divider.svelte'
  import EventList from './EventList.svelte'
  import Gallery from './Gallery.svelte'
  import Iframe from './Iframe.svelte'
  import LegalList from './LegalList.svelte'
  import Map from './Map.svelte'
  import Program from './Program.svelte'
  import RichText from './RichText.svelte'
  import SectionIntro from './SectionIntro.svelte'
  import SessionSpeakers from './SessionSpeakers.svelte'
  import Speakers from './Speakers.svelte'
  import Sponsor from './Sponsor.svelte'
  import Sponsors from './Sponsors.svelte'
  import Stream from './Stream.svelte'
  import VideoBanner from './VideoBanner.svelte'

  export let slices

  let enableAnimation = true

  onMount(function () {
    const value = window.localStorage.getItem('DISABLE_ANIMATION')
    enableAnimation = !value || !JSON.parse(value)
  })
</script>

{#each slices as slice, index}
  <div id={slice.primary.slice_id || `${slice.slice_type}-${index}`}>
    {#if slice.slice_type === 'events'}
      <div class="u-container">
        <EventList props={slice.primary} items={slice.items} />
      </div>
    {/if}

    {#if slice.slice_type === 'sponsor'}
      <div class="u-container">
        <Sponsor
          class="u-spaceXl"
          label={slice.primary.sponsor_label}
          org={slice.primary.sponsor.data} />
      </div>
    {/if}

    {#if slice.slice_type === 'iframe'}
      <Iframe src={slice.primary.url} />
    {/if}

    {#if slice.slice_type === 'venue_map'}
      <div class="u-container">
        <Map title={slice.primary.heading} />
      </div>
    {/if}

    {#if slice.slice_type === 'sponsors'}
      <Sponsors
        items={slice.items.filter(
          (item) => item.sponsor.id && !item.sponsor.isBroken
        )} />
    {/if}

    {#if slice.slice_type === 'button'}
      <div class="u-container">
        <div class:u-pushRight={slice.primary.push}>
          <Button
            class="u-spaceXl"
            solid={slice.primary.solid}
            document={slice.primary.link}>
            {slice.primary.link_text}
          </Button>
        </div>
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
          wide={slice.primary.wide}
          fields={slice.primary.text} />
      </div>
    {/if}

    {#if slice.slice_type === 'about_text'}
      <div class="u-container">
        <RichText
          title={slice.primary.heading}
          fields={slice.primary.main_text} />
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

    {#if slice.slice_type === 'video_banner'}
      <VideoBanner version={slice.primary.version} />
    {/if}

    {#if slice.slice_type === 'animation' && enableAnimation}
      <Animation />
    {/if}

    {#if slice.slice_type === 'gallery'}
      <Gallery photos={slice.items} />
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
            .filter((speaker) => speaker.id && !speaker.isBroken)} />
      </div>
    {/if}

    {#if slice.slice_type === 'session_speakers'}
      <div class="u-container">
        <SessionSpeakers
          items={slice.items
            .map((item) => item.speaker)
            .filter((speaker) => speaker.id && !speaker.isBroken)} />
      </div>
    {/if}

    {#if slice.slice_type === 'program'}
      <div class="u-container">
        <slot name="program">
          <Program
            sessions={slice.items
              .map((item) => item.session)
              .filter((session) => session.id && !session.isBroken)} />
        </slot>
      </div>
    {/if}

    {#if slice.slice_type === 'live_stream'}
      <div class="u-container">
        <Stream
          source={slice.primary.live_stream_url}
          placeholder={slice.primary.placeholder_text} />
      </div>
    {/if}
  </div>
{/each}
