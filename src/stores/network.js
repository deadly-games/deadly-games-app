import { connect } from "@argent/get-starknet";
import { writable } from "svelte/store";

export let networkProvider = writable();
export let isConnected = writable(false);
export let userAddress = writable();
export let wrongNetwork = writable();

let starknet;

export const connectWallet = async () => {
  starknet = await connect({
    include: ["argentX"],
    modalOptions: {
      theme: "dark",
    },
  });
  await starknet?.enable();
  networkProvider.set(starknet);
  if (starknet?.provider.chainId == "0x534e5f474f45524c49") {
    isConnected.set(true);
    userAddress.set(starknet?.selectedAddress);
    wrongNetwork.set(false);
  } else {
    wrongNetwork.set(true);
  }
};

export const disconnectWallet = async () => {
  networkProvider.set(null);
  isConnected.set(false);
};

export const networkId = () => {
  if (!starknet?.isConnected) {
    return;
  }
  try {
    const { baseUrl } = starknet.provider;
    if (baseUrl.includes("alpha-mainnet.starknet.io")) {
      return "mainnet-alpha";
    } else if (baseUrl.includes("alpha4.starknet.io")) {
      return "goerli-alpha";
    } else if (baseUrl.match(/^https?:\/\/localhost.*/)) {
      return "localhost";
    }
  } catch {}
};
