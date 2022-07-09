<script>
  import Card from "../Card.svelte";
  import Button from "../Button.svelte";

  let amount;
  $: bill = amount * 0.08;

  const entry = async () => {};
</script>

<Card name="greed">
  <div style="height: 12px" />
  <p>
    greed consists of a smart vault who keeps track of many things. entrance to
    the game (<span>0.08Ξ</span>) is with a ticket system that can be leveraged
    <span>50x</span>
    to raise your chances to <span>50%</span>.
  </p>
  <div style="height: 16px" />
  <p style="color: var(--divider)">
    ------------------------------------------------
  </p>
  <div style="height: 8px" />
  <div class="observable">
    <p>current jackpot</p>
    <p><span>12.3 Ξ</span></p>
  </div>
  <div class="observable">
    <p>total winners</p>
    <p><span>42</span></p>
  </div>
  <div class="observable">
    <p>tickets sold</p>
    <p><span>538</span></p>
  </div>
  <div style="height: 8px" />
  <p style="color: var(--divider)">
    ------------------------------------------------
  </p>
  <div style="height: 16px" />
  <input
    type="text"
    placeholder="ticket amount (max 50 per tx)"
    bind:value={amount}
  />
  <div style="height: 16px" />

  <div class="button-row">
    <Button icon="tickets.svg" title="buy tickets" on:clicked={entry} />
    <p style="color: var(--divider)">-> ~{bill} Ξ</p>
  </div>
  <div style="height: 12px" />

  <div class="button-row">
    <Button icon="external-link.svg" title="details" on:clicked={entry} />
    <p style="color: var(--divider)">-> learn more about greed</p>
  </div>
</Card>

<style>
  span {
    color: var(--primary);
  }
  .button-row {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .observable {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
