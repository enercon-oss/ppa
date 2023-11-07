<script>
  import {
    createEventDispatcher,
  } from 'svelte';
  import Button from "../Button/Button.svelte";

  const dispatch = createEventDispatcher();

  /**
   * @type {string}
   */
  let newProjectName;

  /**
   * 
   * @param e {SubmitEvent}
   */
  function handleSubmit(e) {
    if (newProjectName === null || typeof newProjectName === undefined || newProjectName?.length === 0) {
      return;
    }
  
    dispatch('new-project-name', {
      name: newProjectName,
    });
  }
</script>

<style>
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4rem auto 4rem;
    grid-template-areas:
      'title title'
      'name name'
      'button button'
    ;

    min-height: 20vh;
    gap: 0.5rem;
    border-radius: var(--border-radius);
    background-color: var(--theme-blue);

    & > .title {
      grid-area: title;
      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--header-color);
      background-color: var(--header-background-color);
    }

    & > .project-name {
      grid-area: name;
    }

    & > .button {
      grid-area: button;
      align-items: end;
    }

    & > :is(.project-name, .button) {
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      color: var(--header-color);
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      & > label {
        color: var(--theme-white);
        font-size: 0.7rem;
      }
    }
  }
</style>

<form on:submit|preventDefault|stopPropagation={handleSubmit}>
  <div class="title">create a new project</div>
  <div class="project-name">
    <label for="newProjectName-id">project name</label>
    <input
      id="newProjectName-id"
      type="text"
      name="new-project-name"
      required
      bind:value={newProjectName}
    />
  </div>
  <div class="button">
    <Button buttonType="submit" dispatchMessage="create-project" text="create" />
  </div>
</form>