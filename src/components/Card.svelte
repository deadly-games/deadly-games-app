<script>
  export let name;
</script>

<main>
  <h2>{name}</h2>
  <slot />
</main>

<style>
  main {
    width: 400px;
    padding: 32px 40px;
    background-color: var(--card-background);
    border: 1px solid var(--button-background);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  h2 {
    color: var(--primary);
  }
</style>
