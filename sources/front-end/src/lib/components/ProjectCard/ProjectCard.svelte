<script>
  /**
   * @type {string}
   */
  export let id;
  /**
   * @type {string}
   */
  export let name;
</script>

<style>
  article {
    background-color: var(--theme-black);
    color: var(--theme-white);

    min-height: 15rem;
  }
</style>

<article>
  <div>{id}</div>
  <div>{name}</div>
</article>