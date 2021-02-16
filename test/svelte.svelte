<script>
  /* eslint-ignore */
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click="{handleClick}">
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>

<style>
  button {
    z-index: 3;
    color: red;
  }
</style>
