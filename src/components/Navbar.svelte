<!-- <script lang="ts">
  import { connectWallet } from "../stores/Network";
</script> -->

<div style="height: 24px" />
<main>
  <div class="nav">
    <img src="images/icons/grim_reaper.svg" alt="" style="height: 36px" />
    <div style="width:0px" />
    <h2 class="nav-button chosen">games</h2>
    <h2 class="nav-button">governance</h2>
    <h2 class="nav-button">docs</h2>
  </div>
  <div class="network">
    <h2 class="nav-button">starknet</h2>
    <img src="images/icons/caret-down.svg" alt="" />
    <div style="width: 8px" />
    <h2>|</h2>
    <div style="width: 8px" />
    <h2 class="nav-button">connect</h2>
  </div>
</main>
<div style="height: 48px" />

<style>
  main {
    width: 820px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav,
  .network {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav {
    gap: 12px;
  }
  .chosen {
    color: var(--primary);
    font-weight: 700;
  }
</style>
