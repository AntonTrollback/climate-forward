<script>
  import RichText from '$lib/RichText.svelte'
  export let items

  let first = 0
  let second = 0
  let third = 0

  function className (item, index) {
    if (item.indentation.includes('(N.N)')) return 'item second'
    if (item.indentation.includes('(N.N.N)')) return 'item third'
    return 'item first'
  }
  function number (item, index) {
    if (item.indentation.includes('(N)')) {
      first = first + 1
      second = 0
      third = 0
      return `${first}.`
    }
    if (item.indentation.includes('(N.N)')) {
      second = second + 1
      third = 0
      return `${first}.${second}.`
    }
    if (item.indentation.includes('(N.N.N)')) {
      third = third + 1
      return `${first}.${second}.${third}.`
    }
  }
</script>

<ul class="list">
  {#each items as item, index}
    <li class={className(item, index)}>
      <div class="Text"><p class="number">{number(item, index)}</p></div>
      <RichText fields={item.item} />
    </li>
  {/each}
</ul>

<style>
  .item {
    display: flex;
  }

  .item > * {
    flex-grow: 1;
  }

  .item + .item {
    margin: 0.5em 0 0;
  }
  .item + .first {
    margin: 1.5em 0 0;
  }

  .number {
    margin-right: 0.5rem;
    min-width: 1.25em;
    flex-grow: 0;
  }

  .second {
    padding-left: 1.9rem;
  }
  .second .number {
    min-width: 2.5em;
  }

  .third {
    padding-left: 5.2em;
  }

  .third .number {
    min-width: 3.25em;
  }
</style>
