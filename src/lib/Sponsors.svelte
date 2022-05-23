<script>
  import Sponsor from './Sponsor.svelte'
  import Divider from './Divider.svelte'
  export let items
  let cols = []

  items.forEach((item, index) => {
    if (items[index - 1]?.label !== item.label) {
      return cols.push({
        label: item.label,
        large: item.large,
        sponsors: [item.sponsor.data]
      })
    }
    cols[cols.length - 1].sponsors.push(item.sponsor.data)
  })
</script>

<Divider size="xl" />
<div class="u-container">
  <section class="cols">
    {#each cols as col}
      <div class="col {col.large ? 'large' : ''}">
        <strong class="label">{col.label}</strong>
        <div class="items">
          {#each col.sponsors as sponsor}
            <div class="item">
              <Sponsor org={sponsor} inline size={col.large ? 'lg' : 'sm'} />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>
</div>

<style>
  .cols {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    grid-gap: 1rem 4rem;
  }

  :global([id*="sponsors"] + .Footer) {
    margin-top: calc((var(--space-xl) * -1) + var(--space-lg));
  }

  .large {
    width: 50%;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0.1875rem;
    white-space: nowrap;
    user-select: none;
  }

  .items {
    display: flex;
  }

  .item {
    margin-right: 1.875rem;
    margin-bottom: 1rem;
    flex-shrink: 0;
  }

  .item:last-child {
    margin-right: 0;
  }
</style>
