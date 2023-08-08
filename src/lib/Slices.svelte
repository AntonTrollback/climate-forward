<script>
  import Button from './Button.svelte'
  import Conversations from './Conversations.svelte'
  import Divider from './Divider.svelte'
  import FAQ from './FAQ.svelte'
  import EventList from './EventList.svelte'
  import Gallery from './Gallery.svelte'
  import LegalList from './LegalList.svelte'
  import Map from './Map.svelte'
  import Previous from './Previous.svelte'
  import Program from './Program.svelte'
  import RichText from './RichText.svelte'
  import ScrollTarget from './ScrollTarget.svelte'
  import SectionIntro from './SectionIntro.svelte'
  import Speakers from './Speakers.svelte'
  import SpeakerDetails from './SpeakerDetails.svelte'
  import Sponsor from './Sponsor.svelte'
  import Sponsors from './Sponsors.svelte'
  import Stream from './Stream.svelte'
  import VideoBanner from './VideoBanner.svelte'
  import { asText } from '@prismicio/helpers'
  import src from './utils/src.js'

  const YOUTUBE_VIDEO =
    /https?:\/\/(?:www\.)?youtu(?:be\.com|\.be)\/(?:embed\/|watch\?v=)?(.+?)(?:\/|$|&|<)/
  const VIMEO_VIDEO =
    /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i

  export let slices
  export let allSpeakers
  export let sessions = null

  function lastnameSort(a, b) {
    a = asText(a.data.name).split(' ').pop()
    b = asText(b.data.name).split(' ').pop()
    console.log(a, b)
    return a.localeCompare(b)
  }

  let sorted = allSpeakers.slice().sort(lastnameSort)

  $: groups = slices?.reduce(function (groups, slice) {
    const last = groups[groups.length - 1]
    if (slice.slice_type === 'scroll_target') {
      groups.push({ id: slice.primary.slice_id, slices: [] })
    } else if (slice.slice_type === 'live_stream') {
      groups.push({ id: 'live-stream', slices: [slice] })
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
        {#if slice.slice_type === 'speaker_dump'}
          <div class="u-container">
            {#each sorted as speaker}
              <Divider size="lg" solid />
              <div style="max-width: 61rem; margin-top: var(--space-block-md)">
                <SpeakerDetails {speaker} imageLink />
              </div>
            {/each}
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
      {/each}
    </svelte:fragment>
  </ScrollTarget>
{/each}
