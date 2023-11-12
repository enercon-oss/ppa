<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import {
    browser as isInBrowser,
  } from '$app/environment';
  import Projects from '$lib/components/Projects/Projects.svelte';
  import ProjectSettings from '$lib/components/ProjectSettings/ProjectSettings.svelte';
  import {
    ActiveMainComponent,
  } from '$lib/stores/ActiveMainComponentStore/ActiveMainComponentStore.mjs';

  /**
	 * @type {typeof Projects | typeof ProjectSettings}
	 */
  let currentSvelteComponent;

  const components = {
    projectList: {
      component: Projects,
    },
    projectsGlobalSettings: {
      component: ProjectSettings,
    }
  };

  const unsubscribeFromActiveMainComponentStore = ActiveMainComponent.subscribe((selectedComponentName) => {
    console.log('[store.subscribe]', selectedComponentName);

    currentSvelteComponent = components[selectedComponentName].component;
  });


  onMount(() => {
    if (isInBrowser === true) {
      console.log('in browser');
    }
  });

  onDestroy(() => {
    if (isInBrowser === true) {
      unsubscribeFromActiveMainComponentStore();
    }
  });
</script>

<svelte:component this={currentSvelteComponent} />
