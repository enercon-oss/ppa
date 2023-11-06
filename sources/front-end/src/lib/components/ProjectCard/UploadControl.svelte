<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import Button from "../Button/Button.svelte";

  /**
   * @type {string}
   */
  let fileName = "";
  /**
   * @type {HTMLInputElement}
   */
  let inputFileCtrl;

  /**
   * @param e {CustomEvent}
   */
  function handleOpenFileRequest(e) {
    inputFileCtrl.click();
  }

  // @ts-ignore
  function handleSelectedFiles(e) {
    for (let i=0; i<e.srcElement.files.length; i+=1) {
      console.log(e.srcElement.files[i]);

      fileName = e.srcElement.files[i].name;
    }
  }
  
  onMount(() => {
    inputFileCtrl.addEventListener("change", handleSelectedFiles, false);
  });

  onDestroy(() => {
    if (inputFileCtrl) {
      inputFileCtrl.removeEventListener("change", handleSelectedFiles, false);
    }
  });
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 2fr 3px;
    grid-template-areas:
      'name button'
      'progress progress'
    ;
    column-gap: 1rem;
    padding: 0.5rem; 
   
    & > div:nth-child(1) {
      grid-area: name;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > label {
        font-size: 0.75rem;
        font-variant: all-petite-caps;
      }

      & > div {
        font-size: 1rem;
      }

      & > :is(label, div) {
        padding: 0 0.5rem;
      }
    }

    & > input[type="file"] {
      display: none;
    }

    & > progress {
      grid-area: progress;
      width: 100%;
      height: 3px;
      appearance: none;
    }

    & > progress[value]::-webkit-progress-bar {
      background-color: var(--theme-light_gray_bright) ;
      border-radius: 2px;
      /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; */
    }

    & > progress[value]::-webkit-progress-value {
      background-color: var(--theme-orange);
    }
  }
</style>

<form>
  <div>
    <label for="file-name-id">upload file</label>
    <div id="file-name-id">{fileName}</div>
  </div>
  <input type="file" id="data-file-id" name="data-file" accept=".csv,.txt" bind:this={inputFileCtrl} />
  <Button
    dispatchMessage="open-file-dialogue"
    text="upload"
    buttonType="submit"
    on:message={handleOpenFileRequest}
  />
  <progress value="0" max="100"></progress>
</form>