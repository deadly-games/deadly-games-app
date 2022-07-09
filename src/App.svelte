<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Introduction from "./components/Introduction.svelte";
  import Greed from "./components/games/Greed.svelte";
</script>

<main>
  <Navbar />
  <div class="sections">
    <Introduction />
    <div style="width: 60px;" />
    <Greed />
  </div>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sections {
    width: 820px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
