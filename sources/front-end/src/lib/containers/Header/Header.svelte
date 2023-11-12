<script>
  import {
    NavigatorStore,
  } from '$lib/stores/Navigator/NavigatorStore.mjs';

  let navigatorItems = {};

  const unsubscribeFromNavigatorStore = NavigatorStore.subscribe((currentNavigatorState) => {
    navigatorItems = currentNavigatorState;
  });
</script>

<style>
  header {
    grid-area: site-header;
    display: grid;
    grid-template-areas:
      'header-title' 
      'header-nav'
    ;
    gap: 0.5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0.5rem 0;
    background-color: var(--header-background-color);
    color: var(--header-color);

    & > h1 {
      grid-area: header-title;
    }

    & > nav {
      grid-area: header-nav;
      display: grid;
      grid-auto-flow: row;
      row-gap: 1rem;

      & > .nav-row {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1rem;
      }

    }

    & a {
      font-variant: all-petite-caps;
      color: var(--theme-white);
    }

    & > :is(h1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<header>
  <h1><a href="/">PPA</a></h1>
  <nav>
    {#each Object.entries(navigatorItems)  as [key, values]}
      <div id={key} class="nav-row">
        {#each values as menuItem}
          <a href="{menuItem.href}">{menuItem.text}</a>
        {/each}
      </div>
    {/each}
  </nav>
</header>