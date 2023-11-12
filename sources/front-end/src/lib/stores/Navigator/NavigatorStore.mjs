import {
  writable,
} from 'svelte/store';

const NavigatorItems = {
  MainRow: [
    {
      href: '/projects',
      text: 'projects',
    },
    {
      href: '/project-settings',
      text: 'settings',
    }
  ],
};

function createNavigatorStore() {
  const {
    subscribe,
    update,
  } = writable(NavigatorItems);

  return {
    subscribe,
    addRow: (rowObject = null) => update((currentValue) => {
      if (rowObject === null) {
        return currentValue;
      }

      for (const keyName of Object.keys(rowObject)) {
        currentValue[keyName] = rowObject[keyName];
      }

      return currentValue;
    }),
    rmRow: (rowObjectKey = null) => update((currentValue) => {
      if (rowObjectKey === null) {
        return currentValue;
      }

      delete currentValue[rowObjectKey];

      return currentValue;
    }),
  };
}

export const NavigatorStore = createNavigatorStore();
