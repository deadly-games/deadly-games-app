<script>
  import Button from "./Button.svelte";

  const clicked = () => {
    console.log("Clicked yes.");
  };
</script>

<main>
  <div style="height:32px" />
  <h1>what dis?</h1>
  <div style="height:12px" />
  <p>
    deadly games is a decentralized playground built on starknet. anyone can
    propose new game ideas or bring ideas into mini-games to be published here.
  </p>
  <div style="height:32px" />
  <a href="https://discourse.com" target="_blank">
    <Button icon="forum.svg" title="forum page" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a href="https://twitter.com/deadlydotgames" target="_blank">
    <Button icon="twitter.svg" title="twitter page" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a href="https://figma.com" target="_blank">
    <Button
      icon="design-system.svg"
      title="design system"
      on:clicked={clicked}
    />
  </a>
  <div style="height:12px" />
  <a href="https://github.com/deadly-games/deadly-games-app" target="_blank">
    <Button icon="github.svg" title="web application" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a
    href="https://github.com/deadly-games/deadly-games-starknet"
    target="_blank"
  >
    <Button icon="github.svg" title="cairo contracts" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a href="https://goerli-faucet.com" target="_blank">
    <Button icon="faucet.svg" title="goerli faucet" on:clicked={clicked} />
  </a>
  <div style="height:48px" />
  <h1>who dat?</h1>
  <div style="height:12px" />
  <p>
    deadly games primitives are developed by decoded labs. decoded labs is a
    developer studio focused on cryptography and decentralized applications.
  </p>
  <div style="height:32px" />
  <a href="https://decoded-labs.com" target="_blank">
    <Button icon="external-link.svg" title="web page" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a href="https://twitter.com/decoded_labs" target="_blank">
    <Button icon="twitter.svg" title="twitter page" on:clicked={clicked} />
  </a>
  <div style="height:12px" />
  <a href="https://github.com/decoded-labs" target="_blank">
    <Button icon="github.svg" title="git page" on:clicked={clicked} />
  </a>
</main>

<style>
  main {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
