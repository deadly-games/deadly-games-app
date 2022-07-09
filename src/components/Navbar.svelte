<script lang="ts">
</script>

<div style="height: 24px" />
<main>
  <img src="images/logo_icon.svg" alt="" />
  <div class="nav">
    <h2 class="nav-button chosen">games</h2>
    <h2 class="nav-button">governance</h2>
    <h2 class="nav-button">docs</h2>
  </div>
  <div class="network">
    <h2 class="nav-button">starknet</h2>
    <h2>|</h2>
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
    gap: 12px;
  }
  .chosen {
    color: var(--primary);
    font-weight: 700;
  }
</style>
