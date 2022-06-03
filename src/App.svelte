<script>
  import Arweave from "arweave";
  import { ArweaveWebWallet } from "arweave-wallet-connector";
  const { SmartWeaveWebFactory } = rsdk;

  const arweave = Arweave.init({});
  const wallet = new ArweaveWebWallet({ name: "Hello" });
  wallet.setUrl("arweave.app");
  const smartweave = SmartWeaveWebFactory.memCached(arweave);

  let count = 0;
  const contractId = window.location.pathname.replace(/\//g, "");
  const contract = smartweave.contract(contractId);

  async function getVisits() {
    return contract.readState().then((res) => res.state);
  }

  async function doVisit() {
    if (!wallet.connected) {
      await wallet.connect();
    }
    await contract.connect("use_wallet").bundleInteraction({
      function: "visit",
    });
    visits = getVisits();
  }

  let visits = getVisits();
</script>

<main class="hero min-h-screen bg-base-200">
  <section class="hero-content text-center">
    <div class="max-w-md space-y-8">
      <h1 class="text-6xl">Hello</h1>
      {#await visits}
        Loading number of visits...
      {:then state}
        <p>Visits: {state.count}</p>
      {:catch e}
        <div class="alert-error">{e.message}</div>
      {/await}
      <button class="btn btn-primary" on:click={doVisit}>Visit</button>
    </div>
  </section>
</main>
