<script>
  import Animation from './Animation.svelte'
  import Button from './Button.svelte'
  import Divider from './Divider.svelte'
  import EventList from './EventList.svelte'
  import Gallery from './Gallery.svelte'
  import LegalList from './LegalList.svelte'
  import Map from './Map.svelte'
  import ScrollTarget from './ScrollTarget.svelte'
  import Program from './Program.svelte'
  import Previous from './Previous.svelte'
  import RichText from './RichText.svelte'
  import SectionIntro from './SectionIntro.svelte'
  import Speakers from './Speakers.svelte'
  import Sponsor from './Sponsor.svelte'
  import Sponsors from './Sponsors.svelte'
  import Stream from './Stream.svelte'
  import VideoBanner from './VideoBanner.svelte'
  import { asText } from '@prismicio/helpers'

  const YOUTUBE_VIDEO =
    /https?:\/\/(?:www\.)?youtu(?:be\.com|\.be)\/(?:embed\/|watch\?v=)?(.+?)(?:\/|$|&|<)/

  export let slices

  $: groups = slices?.reduce(function (groups, slice) {
    const last = groups[groups.length - 1]
    if (slice.slice_type === 'scroll_target') {
      groups.push({ id: slice.primary.slice_id, slices: [] })
    } else if (!last) {
      groups.push({ slices: [slice] })
    } else {
      last.slices.push(slice)
    }
    return groups
  }, [])
</script>

{#each groups as group}
  <ScrollTarget id={group.id || 'start'}>
    <svelte:fragment>
      {#each group.slices as slice}
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
              size={slice.primary.size === 'Small'
                ? 'sm'
                : slice.primary.size === 'Medium'
                ? 'md'
                : slice.primary.size === 'Large'
                ? 'lg'
                : ''}
              org={slice.primary.sponsor.data} />
          </div>
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
              width={slice.primary.width}
              fields={slice.primary.text} />
          </div>
        {/if}

        {#if slice.slice_type === 'main_text'}
          <div class="u-container u-pull">
            <div class="u-pull">
              <div class="u-center">
                <div class="Text">
                  <h1 class="Text-h3">{slice.primary.heading}</h1>
                </div>
                {#if slice.primary.meta?.length}
                  <RichText
                    class="u-pullTarget"
                    size="sm"
                    fields={slice.primary.meta} />
                {/if}
                <RichText class="u-spaceMd" fields={slice.primary.text} />
              </div>
            </div>
          </div>
        {/if}

        {#if slice.slice_type === 'section_title'}
          <hr class="u-hiddenVisually" />
          <div class="u-container">
            <div class="Text Text--spaced Text--xl">
              <h2 class="Text-p">{asText(slice.primary.title)}</h2>
            </div>
            {#if slice.primary.text?.length}
              <RichText class="u-spaceMd" fields={slice.primary.text} />
            {/if}
          </div>
        {/if}

        {#if slice.slice_type === 'about_text'}
          <div class="u-container">
            <RichText
              title={slice.primary.heading}
              fields={slice.primary.main_text} />
          </div>
        {/if}

        {#if slice.slice_type === 'video_player'}
          <div class="u-container">
            {#if slice.primary.player?.embed_url}
              <div class="u-aspectRestrainer u-introPull">
                <div class="u-aspect u-introPull">
                  <iframe
                    src={`https://www.youtube.com/embed/${
                      slice.primary.player.embed_url.match(YOUTUBE_VIDEO)?.[1]
                    }?rel=0&modestbranding=1`}
                    width="1920"
                    height="1080"
                    title="YouTube video player for: {slice.primary.player
                      .title}"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />
                </div>
              </div>
            {/if}
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

        {#if slice.slice_type === 'animation'}
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
              heading={slice.primary.heading}
              standalone={!!slice.primary.heading}
              pushed={slice.primary.pushed}
              items={slice.items
                .map((item) => item.speaker)
                .filter((speaker) => speaker.id && !speaker.isBroken)} />
          </div>
        {/if}

        {#if slice.slice_type === 'program'}
          <div class="u-container">
            <slot name="program">
              <Program
                timeless={slice.primary.timeless}
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

        {#if slice.slice_type === 'previous_sessions'}
          <div class="u-container">
            <slot name="previous_sessions">
              <Previous
                limit={slice.primary.limit}
                sessions={slice.items
                  .map((item) => item.session)
                  .filter((session) => session.id && !session.isBroken)} />
            </slot>
          </div>
        {/if}
      {/each}
    </svelte:fragment>
  </ScrollTarget>
{/each}
