<script>
  // import Button from "../Button/Button.svelte";
  import StepsLabel from "../StepsLabel/StepsLabel.svelte";
  import NewProjectCard from "./NewProjectCard.svelte";
  import UploadControl from "./UploadControl.svelte";
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

  
  /**
   * @param e {CustomEvent}
   */  
  function handleNewProjectCreationRequest(e) {
    const {
      detail: {
        name,
      },
    } = e;

    console.log('handleNewProjectCreationRequest', name);
  }
</script>

<style>
  article:hover {
    background-color: #ffffff;
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
      'name name'
      'calc data'
      'upload upload'
    ;

    min-height: 20vh;
    background-color: var(--theme-white);
    gap: 0.5rem;
    border-radius: var(--border-radius);

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
      grid-auto-rows: minmax(3rem, 1fr);
      gap: 0.5rem;
      margin: 0 0.5rem;
      padding: 0 0.5rem;
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

    & > .upload {
      grid-area: upload;
      background-color: var(--theme-light_gray_bright);
      color: var(--header-color);
    }
  }
</style>

{#if id === null || typeof id === undefined}
    <NewProjectCard on:new-project-name={handleNewProjectCreationRequest}/>
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
      <legend>info</legend>
    </fieldset>
    <div class="upload">
      <UploadControl />
    </div>
  </article>
{/if}