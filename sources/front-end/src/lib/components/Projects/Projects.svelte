<script>
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  
  /**
   * @type {Array<object>}
   */
  let  projects = [];

  onMount(() => {
    for (let i = 0; i < 20; i+=1) {
      projects.push({
        id: i,
        name: `project ${i}`,
      })
    }

    projects = projects;
  });
</script>  

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    min-height: 100%;
    gap: 1rem;
    width: calc(100% - 0.5rem);
    margin: 0 auto;
  }
</style>

<div>
  {#each projects as project(project.id)}
    <ProjectCard
      id={project.id}
      name={project.name} 
    />
  {/each}
</div>