<script>
  import {
    createEventDispatcher,
  } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('message', {
      value: dispatchMessage,
    });
  }

  /**
   * @type {string}
   */
  export let dispatchMessage;
  /**
   * @type {string}
   */
  export let text;
</script>

<style>
  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
</style>

<button on:click={handleClick}>{text}</button>