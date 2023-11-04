import {
  writable,
} from 'svelte/store';
import {
  MainComponentsEnum,
} from '$lib/constants/MainComponentsEnum.mjs';

let selectedComponent = MainComponentsEnum.default;

function createStore() {
  const {
    subscribe,
    update,
  } = writable(selectedComponent);

  return {
    subscribe,
    select: (newComponentName = null) => update((currentValue) => {

      console.log('store.select', newComponentName, currentValue);

      return newComponentName === currentValue ? currentValue : newComponentName;
    }),
  };
};

export const ActiveMainComponent = createStore();
