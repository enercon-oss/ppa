<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    browser as isInBrowser,
  } from '$app/environment';
  import {
    NavigatorStore,
  } from '$lib/stores/Navigator/NavigatorStore.mjs';
  
  const navRowName = "ProjectRow";
  const ownNavRow = {
    [navRowName]: [
    {
      href: 'some-link',
      text: 'some link',
    },
    {
      href: 'some-link-2',
      text: 'link 2',
    }
    ],
  };

  onMount(() => {
    if (isInBrowser === true) {
      // @ts-ignore
      NavigatorStore.addRow(ownNavRow);
    }
  });

  onDestroy(() => {
    if (isInBrowser === true) {
      // @ts-ignore
      NavigatorStore.rmRow(navRowName);
    }
  });
</script>