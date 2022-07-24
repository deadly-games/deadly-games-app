<script>
  import Card from "../Card.svelte";
  import Button from "../Button.svelte";
  import {
    isConnected,
    networkProvider,
    userAddress,
  } from "../../stores/network";
  import greed_abi from "./greed_abi.json";
  import token_abi from "./karma.json";
  import { onMount } from "svelte";
  import { Contract, number, uint256, defaultProvider } from "starknet";
  import { ethers } from "ethers";

  let greed_address_hex =
    "0x05b0dc3a40b9c4aafcadf841ef59e5eee9a1f142b9d24055222156da0f9ed054";

  let token_address =
    "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";

  let amount;
  $: bill = amount ? amount * 0.01 : 0;
  // $: if ($isConnected) {
  //   fetchData();
  // }

  let jackpot_amount, winner_count, tickets_sold, ticket_price;

  setInterval(() => {
    fetchData();
  }, 10000);
  onMount(() => {
    fetchData();
  });

  const fetchData = async () => {
    const greed = new Contract(
      // @ts-ignore
      greed_abi,
      greed_address_hex,
      defaultProvider
    );
    jackpot_amount = await greed.get_jackpot_amount();
    jackpot_amount = parseFloat(
      ethers.utils.formatEther(jackpot_amount.amount.low.toString())
    );
    winner_count = number.toBN(await greed.get_epoch(), 16).toString();
    tickets_sold = number.toBN(await greed.get_tickets_sold(), 16).toString();
    ticket_price = uint256
      .uint256ToBN(await greed.get_ticket_price())
      .toString();
  };

  const entry = async () => {
    if (isConnected) {
      const token = new Contract(
        // @ts-ignore
        token_abi,
        token_address,
        $networkProvider.account
      );
      let allowance = await token.allowance($userAddress, greed_address_hex);
      allowance = parseFloat(
        ethers.utils.formatEther(allowance.remaining.low.toString())
      );
      console.log("allowance: ", allowance);
      console.log("needed: ", 0.01 * parseInt(amount));

      if (allowance < 0.01 * parseInt(amount)) {
        try {
          const approval = await token.approve(
            greed_address_hex,
            [number.toBN((0.01 * parseInt(amount)).toString()), 0],
            [
              {
                overrides: {
                  maxFee: "0",
                },
              },
            ]
          );
          await $networkProvider.provider.waitForTransaction(approval);
        } catch (e) {
          console.log(e);
        }
      }
      try {
        const greed = new Contract(
          // @ts-ignore
          greed_abi,
          greed_address_hex,
          $networkProvider.account
        );
        await greed.greed(amount, [
          {
            overrides: {
              maxFee: "0",
            },
          },
        ]);
      } catch (e) {
        console.log(e);
      }
    }
  };
</script>

<Card name="greed">
  <div style="height: 12px" />
  <p>
    greed consists of a smart vault who keeps track of many things. entrance to
    the game (<span>0.01Ξ</span>) is with a ticket system that can be leveraged
    <span>50x</span>
    to raise your chances to <span>50%</span>.
  </p>
  <div style="height: 16px" />
  <p style="color: var(--divider)">
    -----------------------------------------------------
  </p>
  <div style="height: 8px" />
  <div class="observable">
    <p>current jackpot</p>
    <p><span>{jackpot_amount} Ξ</span></p>
  </div>
  <div class="observable">
    <p>total winners</p>
    <p><span>{winner_count}</span></p>
  </div>
  <div class="observable">
    <p>tickets sold</p>
    <p><span>{tickets_sold}</span></p>
  </div>
  <div style="height: 8px" />
  <p style="color: var(--divider)">
    -----------------------------------------------------
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
