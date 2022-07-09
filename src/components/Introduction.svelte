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
  <Button icon="forum.svg" title="forum page" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="twitter.svg" title="twitter page" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="design-system.svg" title="design system" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="github.svg" title="web application" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="github.svg" title="cairo contracts" on:clicked={clicked} />
  <div style="height:32px" />
  <h1>who dat?</h1>
  <div style="height:12px" />
  <p>
    deadly games primitives are developed by decoded labs. decoded labs is a
    developer studio focused on cryptography and decentralized applications.
  </p>
  <div style="height:32px" />
  <Button icon="external-link.svg" title="web page" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="twitter.svg" title="twitter page" on:clicked={clicked} />
  <div style="height:12px" />
  <Button icon="github.svg" title="git page" on:clicked={clicked} />
</main>

<style>
  main {
    width: 360px;
    display: flex;
    flex-direction: column;
  }
</style>
