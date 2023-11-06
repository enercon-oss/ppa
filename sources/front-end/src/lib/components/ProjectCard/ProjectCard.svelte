<script>
  import Button from "../Button/Button.svelte";
  import StepsLabel from "../StepsLabel/StepsLabel.svelte";
  /**
   * @type {string | null | undefined}
   */
  export let id;
  /**
   * @type {string | null | undefined}
   */
  export let name;

  /**
   * @type {object}
   */
  export let calculations = null;

  
  function handleCreateProjectButtonClick() {
    if (name === null || typeof name === undefined || name?.length === 0) {
      return;
    }

    console.log('handleCreateProjectButtonClick', name);
  }

  /**
   * 
   * @param e {SubmitEvent}
   */
  function handleSubmit(e) {
    console.log('handleSubmit', e);
  }
</script>

<style>
  article, form {
    min-height: 20vh;
    background-color: var(--theme-white);
    gap: 0.5rem;
    border-radius: var(--border-radius);
  }
  
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr repeat(2, 2fr);
    grid-template-areas:
      'title title'
      'name name'
      '. button'
    ;
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

  article:hover {
    background-color: #ffffff;
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 4fr;
    grid-template-areas:
      'name name'
      'calc data'
    ;

    & > .project-name {
      grid-area: name;
      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--header-color);
      background-color: var(--header-background-color);
    }

    & > fieldset {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 1fr;
      gap: 0.5rem;
      margin: 0 0.5rem 0.5rem;
      padding: 0 0.5rem 0.5rem;
      /* border: 1px solid var(--theme-light_gray_bright);
      border-radius: var(--border-radius); */
      border: none;
      border-top: 1px solid var(--theme-light_gray_bright);
      
      & > legend {
        font-size: 0.85rem;
        font-variant: all-petite-caps;
        padding: 0 0.25rem;
        margin: 0 0.25rem;

        color: var(--header-color);
        background-color: var(--header-background-color);
      }

      & > div {
        display: grid;
        grid-template-columns: 6fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
          'calc-name calc-steps' 
        ;
        justify-content: start;
        align-items: center;
        gap: 0.5rem;

        & > div {
          display: flex;
          height: 100%;
          align-items: center;
          font-size: 0.85rem;
        }

        & > div:nth-child(1) {
          grid-area: calc-name;
          font-variant: all-petite-caps;
        }

        & > div:nth-child(2) {
          grid-area: calc-steps;
          background-color: var(--header-background-color);
          color: var(--header-color);
          font-feature-settings: "frac";
          font-size: 1.25rem;
        }

        & > div:not(:nth-child(1)) {
          justify-content: center;
        }
      }
    }

    & > .calc {
      grid-area: calc;
    }

    & > .data {
      grid-area: data;
    }
  }
</style>

{#if id === null || typeof id === undefined}
  <form on:submit|preventDefault|stopPropagation={handleSubmit}>
    <div class="title">create a new project</div>
    <div class="project-name">
      <label for="newProjectName-id">project name</label>
      <input
        id="newProjectName-id"
        type="text"
        name="new-project-name"
        required
        bind:value={name}
      />
    </div>
    <div class="button">
      <Button buttonType="submit" dispatchMessage="create-project" text="create" on:message={handleCreateProjectButtonClick}/>
    </div>
  </form>
  {:else}  
  <article {id}>
    <div class="project-name">{name}</div>
    <fieldset class="calc">
      <legend>calc</legend>
        {#if calculations}
          {#each calculations.items as calculation}
            <div class="row">
              <div>{calculation.name}</div>
              <StepsLabel currentStep={calculation.steps.current} numOfSteps={calculation.steps.numOfSteps} />
            </div>
          {/each}
        {/if}
    </fieldset>
    <fieldset class="data">
      <legend>results</legend>
    </fieldset>
  </article>
{/if}