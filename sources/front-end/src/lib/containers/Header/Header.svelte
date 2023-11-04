<script>
  import NavButton from "$lib/components/NavButton/NavButton.svelte";
  import {
    ActiveMainComponent,
  } from '$lib/stores/ActiveMainComponentStore/ActiveMainComponentStore.mjs';
  import { MainComponentsEnum } from '$lib/constants/MainComponentsEnum.mjs';

 const mainComponentsEnumEntries = Object.entries(MainComponentsEnum.items);

  /**
   * 
   * @param e {CustomEvent}
   */
  function handleClick(e) {
    const {
      detail: {
        value,
      },
    } = e;

    ActiveMainComponent.select(value);
  }
</script>

<style>
  header {
    grid-area: site-header;
    display: grid;
    grid-template-areas:
      'header-title' 
      'header-nav'
    ;
    position: sticky;
    top: 0;
    background-color: azure;

    & > h1 {
      grid-area: header-title;
    }

    & > nav {
      grid-area: header-nav;
      column-gap: 1rem;
    }

    & > :is(h1, nav) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<header>
  <h1>PPA</h1>
  <nav>
    {#each mainComponentsEnumEntries as [componentName, { description }]}
      <NavButton dispatchMessage="{componentName}" text="{description}" on:message={handleClick}/>
    {/each}
  </nav>
</header>