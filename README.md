# Arweave DataFi: SmartWeave(dApp) 🧪

DataFi is the concept of combining permanent Data + NFT (Non-Fungible Token) + Permaweb + SmartWeave Contracts + PST (Profit Sharing Token) in ways that provide decentralized finance features for immutable storage in the Arweave community. So that is a mouth full of concepts. 😀 For us to get a deeper understanding of the bundled concept of DataFi, we will need to dive down the rabbit hole of each of these technologies. We will not go deep, but hopefully deep enough for you to get a full understanding of what DataFi can be. We will also discuss some use cases that are applying this concept in practice, and some potential use cases for this concept.

    🧪 NOTE: This is under heavy discovery and will evolve, many of the technologies mentioned are in motion and subject to affect this bundled concept called DataFi. So be warned there will be dragons here! 🐉

To better understand the capabilities of DataFi, I think it will be best to unpack each of the underlining concepts with references to explore them deeper. Then walk through a proof of concept via code that can demonstrate the combination of these concepts in a simple project. Finally, share some use cases that demonstrate DataFi in the wild. Buckle up this should be a fun ride. 🚀

* Trustless
* Permissionless
* Composable

This is a multipart series of concepts all grouped together under the concept of dataFi, where permanent **data** meets decentralized **fi**nalization. Arweave contains many core concepts that can be bundled together to create interesting features and functionality that is unique to the Arweave ecosystem. 

Permanent **Data** + Decentralized **Fi**nalization = **DataFi**
	
## Exploring embedding a Permaweb app into a SmartWeave Contract

Everything on Arweave is a transaction, from files, images, protocols, html, js, css, and contracts. With this capability we get composability. When you combine composability with immutability you can bundle interesting outputs. In this workshop we are going to bundle a permaweb application inside a SmartWeave contract.

### What is a permaweb application?

It is a website or webapplication that is stored and served from the Arweave network via an Arweave gateway. For more details, check out https://permanotes.app/#/notes/Szb6Kw7lJlkuy6dB18e3C6i8sHrJTDjCo7Wgivc_gtI 

## What is a SmartWeave Contract

A SmartWeave contract is specific code that is stored on the Arweave network with an initial state and for every interaction a new transaction is created. The replaying of all those transactions establishes a new state for the contract.

> Uses lazy-evaluation to move the burden of contract execution from network nodes to smart contract users. Currently, SmartWeave supports JavaScript, using the client's unmodified execution engine. -- ArweaveTeam

> To Learn more about SmartWeave Contracts check out - https://redstone.academy/

### Our Smart Contract

``` js
const functions = { visit }

export function handle(state, action) {
  if (Object.keys(functions).includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }
  return ContractError('function not defined!')
}

function visit(state, action) {
  state.count = state.count + 1;
  return { state }
}
```

This contract has a single function called visit, when called it increments the contract state's count property by 1.

> NOTE: There are a couple of discoveries we found when going through this process, and these items may change in the future but as the time of June 2022 these were the facts.
> 1. GET /tx/{id} only works for transactions that are on chain and not in an ArBundle, so we need to write our ContractSrc and Contract to be on-chain transactions.
> 1. The RedStone Smartweave SDK (Warp) does not support custom data when using the `createContract` functionality, so in order to place our permaweb app inside our SmartWeaveContract we need to use `arweave.createTransaction`


### Creating our SmartWeaveContract Source Transaction

In order to create our contract we need a wallet and a connection to arweave.

``` js
const tx = await arweave.createTransaction({ data: source })

tx.addTag('Content-Type', 'application/javascript')
tx.addTag('App-Name', 'SmartWeaveContractSource')
tx.addTag('App-Version', '0.3.0')

await arweave.transactions.sign(tx, w)
await arweave.transactions.post(tx)
```

Just like any transaction we need to create an object with the source code assigned to the data prop of the transaction input. Then we add tags, content-type describing the content of the data being uploaded, App-Name must always be 'SmartWeaveContractSource' and App-Version should always be`0.3.0` as of the time of this writing.

> Normally, we would use @bundlr-network/client to publish files, but we need this contract identifier to be easily accessible from the GET /tx/{id}. Currently this command is only available for documents that have been added on weave.

### Creating our Permaweb Application

To create this application, we will use vite and svelte, you can use any Javascript SPA framework, but in order to publish it on the permaweb we need to change the linking of assets from root to relative based.

``` sh
npm create vite app -- --template svelte
cd app
npm install
npm install arweave-wallet-connector
```

Edit vite.config.js

``` js
export default defineConfig({
  base: '',
  plugins: [svelte()],
  ...
});
```

### Lets modify the index.html page

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello</title>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.2/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/redstone-smartweave/bundles/web.bundle.js"></script>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>

</html>
```



### Lets modify the App.svelte page

``` svelte
<script>
  // dependencies
	import Arweave from "arweave";
  import { ArweaveWebWallet } from "arweave-wallet-connector";
  const { SmartWeaveWebFactory } = rsdk;
  // initialization
	const arweave = Arweave.init({});
	const wallet = new ArweaveWebWallet({
    name: "Hello",
    logo: "https://jfbeats.github.io/ArweaveWalletConnector/placeholder.svg",
  });
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
  
	// load visits
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
```

### Understanding how we will interact with the SmartContract

In this section, we will breakdown the interesting parts of the permaweb application:

The smartcontract will share the same txId as our permaweb application, so we can grab the txId from window.location.pathname.

> NOTE: Grabbing the txId from the window.location.pathname may not be great for every situation, you can also consider tagging the transactoin and accessing the contractId via graphql.

``` js
const contractId = window.location.pathname.replace(/\//g, "");
const contract = smartweave.contract(contractId);
```

Get the current state of the contract, the reason we use this readState function versus the readInteraction, is because we can execute the readState function without having to supply a wallet.

``` js
async function getVisits() {
    return contract.readState().then((res) => res.state);
}
```

Implement a handler function to write an interaction using bundlr

``` js
async function doVisit() {
  if (!wallet.connected) {
    await wallet.connect();
  }
  await contract.connect("use_wallet").bundleInteraction({
    function: "visit",
  });
  visits = getVisits();
}
```

In this function, we first check and see if arweave app wallet is connected, if so, then we connect it to our contract and call the "visit" function which writes out an interaction. Then we request the query that is used to provide us the number, is run the next cycle.

The Svelte Markup is just a reactive `#await` with a `on:click` handler for a button:

``` svelte
{#await visits}
  Loading number of visits...
{:then state}
  <p>Visits: {state.count}</p>
{:catch e}
 <div class="alert-error">{e.message}</div>
{/await}
<button class="btn btn-primary" on:click={doVisit}>Visit</button>
```


### Building our permaweb app

Now that we have our app in place, lets build it into the `dist` folder.

```
npm run build
```

The result is an index.html, and an assets folder containing a javascript file:

``` sh
dist/index.html
dist/assets/index.786f0a53.js
```

You will want to take note of the index.[value].js, because we will need it down the road.

## Creating the SmartContract

So we have our contract source transaction id, and we have our application files ready to go, we are ready to upload those files on the permaweb and then create a path.manifest file to package them as a permaweb application, and we will create a contract transaction with that path manifest as the data of the smart contract.

Lets create a file called `deploy.js` in our root directory

``` js
import fs from 'fs'
import Bundlr from '@bundlr-network/client';
import Arweave from 'arweave'
//import { SmartWeaveNodeFactory } from 'redstone-smartweave'

// Configure Smartweave
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

// js file
const js = '786f0a53'
// load wallet
const w = JSON.parse(fs.readFileSync('wallet.json', 'utf-8'))
const bundlr = new Bundlr.default("http://node2.bundlr.network", "arweave", w);
const CONTRACT_SRC = 'CONTRACT_SRC_HERE'

const indexHTML = fs.readFileSync('./dist/index.html', 'utf-8')
const indexJS = fs.readFileSync(`./dist/assets/index.${js}.js`, 'utf-8')

// upload index.html
const indexHtmlTx = await bundlr.createTransaction(indexHTML, {
  tags: [
    { name: 'Content-Type', value: 'text/html' }
  ]
})
await indexHtmlTx.sign()
await indexHtmlTx.upload()

// upload index.js
const indexJSTx = await bundlr.createTransaction(indexJS, {
  tags: [
    { name: 'Content-Type', value: 'application/javascript' }
  ]
})
await indexJSTx.sign()
await indexJSTx.upload()

const app = JSON.stringify({
  manifest: "arweave/paths",
  version: "0.1.0",
  index: {
    path: "index.html"
  },
  paths: {
    "index.html": {
      "id": `${indexHtmlTx.id}`
    },
    [`assets/index.${js}.js`]: {
      "id": `${indexJSTx.id}`
    }
  }
}
)

const appContract = await arweave.createTransaction({ data: app })
appContract.addTag('Content-Type', 'application/x.arweave-manifest+json')
appContract.addTag('App-Name', 'SmartWeaveContract')
appContract.addTag('App-Version', '0.3.0')
appContract.addTag('Contract-Src', CONTRACT_SRC)
appContract.addTag('Init-State', JSON.stringify({ count: 0 }))

await arweave.transactions.sign(appContract, w)
await arweave.transactions.post(appContract)

console.log(appContract.id)
```


## Summary

Once complete you have a permaweb working inside of a smart contract. Yay! 

Why is this a big deal? In the next workshop, we create a new contract that meets the requirements of an Atomic NFT, which will basically turn our little web app in to an atomic NFT and we will be able to transfer ownership of the NFT, with in the app.

You can check out a working demo here!

https://arweave.net/IBmNAx1Q6ZF5JkiJ4bfAou6ehtHk8VPUK_406qQRz5s/
