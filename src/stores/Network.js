import { connect } from "@argent/get-starknet";
import { writable } from "svelte/store";

export let provider = writable();

export const connectWallet = async () => {
  const starknet = connect();
  provider.set(starknet);
};
