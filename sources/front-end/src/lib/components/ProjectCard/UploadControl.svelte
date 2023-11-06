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
    grid-template-rows: 1fr;
    grid-template-areas:
      'name button'
    ;
    padding: 0.5rem 1rem;
   
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
    }

    & > input[type="file"] {
      display: none;
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
</form>