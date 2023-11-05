<script>
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  
  /**
   * @type {Array<object>}
   */
  let  projects = [];

  onMount(() => {
    projects.push({
      id: null,
      name: null,
    });

    for (let i = 0; i < 20; i+=1) {
      projects.push({
        id: i,
        name: `project ${i}`,
        calculations: {
          items: [
            {
              name: 'uncertainty #1',
              steps: {
                current: Math.random() > 0.45 ? Math.ceil (Math.random() * (20 - 0) + 0) : 20,
                numOfSteps: 20,
              },
            },
            {
              name: 'uncertainty #2',
              steps: {
                current: Math.ceil (Math.random() * (30 - 0) + 0),
                numOfSteps: 30,
              },
            },
            {
              name: 'site calibration',
              steps: {
                current: Math.ceil (Math.random() * (60 - 0) + 0),
                numOfSteps: 60,
              },
            },
          ],
        }
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
    padding: 0.5rem;
  }
</style>

<div>
  {#each projects as project(project.id)}
    <ProjectCard
      id={project.id}
      name={project.name} 
      calculations={project.calculations}
    />
  {/each}
</div>