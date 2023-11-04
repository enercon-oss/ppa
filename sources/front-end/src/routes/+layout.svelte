<script>
  import Header from "$lib/containers/Header/Header.svelte";
  import Footer from "$lib/containers/Footer/Footer.svelte";
</script>
<style>
</style>
<Header />
<main>
  <slot />
</main>
<Footer />