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
  /**
   * @type {"button" | "submit" | "reset" | null | undefined}
   */
  export let buttonType = "button";
</script>

<style>
  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
  
    &:active {
      color: var(--theme-white);
    }
  }
</style>

<button type={buttonType} on:click={handleClick}>{text}</button>