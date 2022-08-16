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
        size:
          item.size === 'Small'
            ? 'sm'
            : item.size === 'Medium'
            ? 'md'
            : item.size === 'Large'
            ? 'lg'
            : '',
        sponsors: [item.sponsor.data]
      })
    }
    cols[cols.length - 1].sponsors.push(item.sponsor.data)
  })
</script>

<Divider size="xl" />
<div class="u-container">
  <div class="cols">
    {#each cols as col}
      <div class="col {col.large ? 'large' : ''}">
        <strong class="label">{col.label}</strong>
        <div class="items">
          {#each col.sponsors as sponsor}
            <div class="item">
              <Sponsor org={sponsor} size={col.size} />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .cols {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    grid-gap: 1rem 2rem;
  }

  @media (min-width: 650px) {
    .cols {
      justify-content: space-between;
    }
  }

  :global([id*='sponsors'] + .Footer) {
    margin-top: calc((var(--space-block-xl) * -1) + var(--space-block-md));
  }

  .large {
    width: 100%;
  }

  @media (min-width: 650px) {
    .large {
      width: 50%;
    }
  }

  .label {
    display: block;
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: var(--space-sm);
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
  }

  .items {
    display: flex;
  }

  .item {
    margin-right: 1.875rem;
    margin-bottom: 1rem;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .item:last-child {
    margin-right: 0;
  }
</style>
