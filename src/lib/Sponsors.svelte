<script>
  import Sponsor from './Sponsor.svelte'
  import Divider from './Divider.svelte'
  export let items
  let cols = []
  let plenty = items.length > 6

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
  <div class="cols {plenty ? 'plenty' : ''}">
    {#each cols as col}
      <div class="col {col.large ? 'large' : ''}">
        <div class="wrap">
          <strong class="label {col.label === 'Main Sponsors' ? 'push' : ''}"
            >{col.label}</strong>
          <div class="items">
            {#each col.sponsors as sponsor}
              <div class="item">
                <Sponsor org={sponsor} size={col.size} />
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .cols {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem calc(var(--space-grid) * 1);
    margin-bottom: -1.5rem;
  }

  .col {
    grid-column: span 2;
  }

  .large {
    grid-column: span 4;
  }

  .plenty .col {
    grid-column: span 4;
  }

  @media (min-width: 600px) {
    .cols {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .col {
      grid-column: span 1;
    }

    .large {
      grid-column: span 2;
    }

    .cols:not(.plenty) .col:last-child:not(:only-child) {
      display: flex;
      justify-content: end;
    }
  }

  @media (min-width: 1100px) {
    .cols {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    .col {
      grid-column: span 1;
    }

    .large {
      grid-column: span 4;
    }

    .plenty .col {
      grid-column: span 3;
    }

    .plenty .col:last-child {
      position: relative;
      grid-column: span 6;
      padding-top: var(--space-sm);
    }

    .plenty .col:last-child::before {
      position: absolute;
      top: 0;
      left: -50vw;
      width: 150vw;
      content: '';
      border-top: 1px solid var(--current-color-border);
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

  .push {
    margin-bottom: var(--space-lg);
  }

  .items {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    margin-right: 2.25rem;
    margin-bottom: 1rem;
    flex-shrink: 0;
  }

  .large .item {
    margin-right: 2.5rem;
  }

  :global(.item a) {
    display: block;
  }

  @media (min-width: 1000px) {
    .large .item {
      margin-right: 3.5rem;
    }
  }

  .item:last-child {
    margin-right: 0;
  }
</style>
