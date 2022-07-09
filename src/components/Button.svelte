<script>
  import { createEventDispatcher } from "svelte";

  export let icon;
  export let title;

  const dispatch = createEventDispatcher();

  function clicked() {
    dispatch("clicked");
  }
</script>

<main on:click={clicked}>
  <div class="icon-box">
    <img src={`images/icons/${icon}`} alt="" />
  </div>
  <div class="title-box">
    <h2 class="button-text">{title}</h2>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  h2 {
    color: var(--primary);
  }
  .button-text {
    font-family: inherit;
    font-style: inherit;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.05em;
    color: inherit;
  }
  .icon-box {
    height: 20px;
    width: 20px;
    padding: 4px;
    border: 2px solid var(--button-background);
    background-color: var(--background);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-box {
    padding: 2px;
    background-color: var(--button-background);
    color: var(--primary);
  }
  .title-box:hover {
    background-color: var(--primary);
    color: var(--background);
  }
</style>
