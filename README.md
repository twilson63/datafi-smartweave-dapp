# Arweave DataFi: SmartWeave(dApp) 🧪

DataFi is the concept of combining permanent Data + NFT (Non-Fungible Token) + Permaweb + SmartWeave Contracts + PST (Profit Sharing Token) in ways that provide decentralized finance features for immutable storage in the Arweave community. So that is a mouth full of concepts. 😀 For us to get a deeper understanding of the bundled concept of DataFi, we will need to dive down the rabbit hole of each of these technologies. We will not go deep, but hopefully deep enough for you to get a full understanding of what DataFi can be. We will also discuss some use cases that are applying this concept in practice, and some potential use cases for this concept.

    🧪 NOTE: This is under heavy discovery and will evolve, many of the technologies mentioned are in motion and subject to affect this bundled concept called DataFi. So be warned there will be dragons here! 🐉

To better understand the capabilities of DataFi, I think it will be best to unpack each of the underlining concepts with references to explore them deeper. Then walk through a proof of concept via code that can demonstrate the combination of these concepts in a simple project. Finally, share some use cases that demonstrate DataFi in the wild. Buckle up this should be a fun ride. 🚀

* Trustless
* Permissionless
* Composable

This is a multipart series of concepts all grouped together under the concept of dataFi, where permanent **data** meets decentralized **fi**nalization. Arweave contains many core concepts that can be bundled together to create interesting features and functionality that is unique to the Arweave ecosystem. 

Permanent **Data** + Decentralized **Fi**nalization = **DataFi**

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 818.75390625 737.5078125" width="100%" height="737.5078125">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style>
      @font-face {
        font-family: "Virgil";
        src: url("https://excalidraw.com/Virgil.woff2");
      }
      @font-face {
        font-family: "Cascadia";
        src: url("https://excalidraw.com/Cascadia.woff2");
      }
    </style>
  </defs>
  <rect x="0" y="0" width="818.75390625" height="737.5078125" fill="#ffffff"></rect><g stroke-linecap="round" transform="translate(256.6328125 207.37890625) rotate(0 147 141.59765625)"><path d="M78.99 14.97 C90.43 6.34, 107.27 3.67, 122.32 1.36 C137.38 -0.95, 154.41 -1.24, 169.32 1.1 C184.23 3.43, 198.42 8.63, 211.75 15.37 C225.09 22.1, 238.47 31.44, 249.33 41.5 C260.2 51.56, 269.69 62.79, 276.96 75.74 C284.22 88.68, 290.42 104.68, 292.93 119.17 C295.45 133.66, 294.62 148.36, 292.07 162.68 C289.52 176.99, 284.28 192.16, 277.66 205.05 C271.04 217.94, 262.65 229.8, 252.33 240.02 C242.02 250.24, 229.28 259.55, 215.77 266.36 C202.26 273.16, 186.36 278.21, 171.28 280.85 C156.21 283.49, 140.22 284.38, 125.3 282.22 C110.39 280.06, 95.41 274.66, 81.82 267.91 C68.23 261.17, 54.49 251.99, 43.76 241.76 C33.02 231.52, 24.39 219.26, 17.43 206.5 C10.47 193.74, 4.57 179.36, 2.02 165.2 C-0.54 151.04, -0.13 135.9, 2.12 121.56 C4.37 107.22, 8.88 92.47, 15.51 79.17 C22.15 65.87, 30.03 52.82, 41.93 41.74 C53.83 30.66, 77.74 17.73, 86.92 12.71 C96.11 7.7, 96.17 9.49, 97.05 11.63 M121.94 1.38 C135.81 -3.22, 151.55 -0.67, 166.61 1.7 C181.66 4.07, 198.66 9.3, 212.28 15.62 C225.9 21.94, 237.78 29.53, 248.34 39.63 C258.89 49.73, 268.2 63.51, 275.6 76.22 C283 88.93, 289.83 101.96, 292.71 115.88 C295.59 129.8, 294.99 144.93, 292.86 159.73 C290.73 174.53, 286.57 191.44, 279.92 204.67 C273.26 217.89, 263.59 228.69, 252.94 239.08 C242.28 249.46, 229.58 260.21, 216 266.97 C202.43 273.73, 186.37 277.02, 171.47 279.62 C156.57 282.23, 141.24 284.18, 126.59 282.61 C111.94 281.03, 96.98 276.77, 83.57 270.17 C70.17 263.57, 56.98 253.13, 46.15 243.01 C35.33 232.89, 25.74 222.13, 18.64 209.45 C11.53 196.76, 6.51 181.67, 3.52 166.92 C0.54 152.16, -1.09 135.18, 0.72 120.92 C2.54 106.65, 7.78 94.44, 14.41 81.35 C21.04 68.26, 30.1 52.98, 40.48 42.39 C50.86 31.81, 63.04 24.4, 76.68 17.83 C90.32 11.27, 114.75 5.14, 122.33 2.99 C129.92 0.84, 121.87 2.9, 122.2 4.92" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g stroke-linecap="round" transform="translate(15.38671875 13.29296875) rotate(0 77.5 53.5)"><path d="M-1.17 -1.99 C40.12 -1.71, 77.62 -1.1, 156.82 0.13 M-0.72 -0.63 C55.48 0.01, 110.94 0.03, 155.66 0.59 M154.1 -1.1 C156.82 43.2, 154.34 85.66, 153.29 107.77 M154.46 -0.4 C154.73 23.87, 154.75 47.81, 154.11 107.44 M153.87 108.26 C117.68 107.83, 80.02 106.06, 0.83 106.78 M154.61 106.88 C122.86 105.28, 93.13 105.62, -0.46 107.6 M0.41 108.14 C1.78 80.99, 1.77 52.14, -0.22 -0.67 M0.19 106.68 C-0.44 68.99, -0.79 31.06, -0.51 0.15" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(20.38671875 41.79296875) rotate(0 72.5 25)"><text x="72.5" y="18" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">Atomic</text><text x="72.5" y="43" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">NFTs</text></g><g stroke-linecap="round" transform="translate(633.12109375 10) rotate(0 80.5 60.330078125)"><path d="M-1.02 0.29 C48.75 0.47, 96.87 -1.95, 159.21 -0.47 M-0.09 0.05 C55.23 0.29, 110.03 0.78, 160.69 0.18 M160.09 0.76 C162.35 46.6, 159.03 95.03, 162.17 119.79 M161.78 0.39 C160.53 29.2, 160.1 58.06, 160.58 121.24 M161.14 119.92 C126.06 122.72, 86.87 119.67, -0.77 118.94 M161.53 120.41 C126.47 119.97, 91.58 119.33, 0.79 120.48 M1.86 118.69 C2.86 74.14, 0.4 28.08, -0.47 1.16 M-0.28 121.29 C-0.64 94.51, 0.26 66.05, 0.32 -0.47" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(638.12109375 57.830078125) rotate(0 75.5 12.5)"><text x="75.5" y="18" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">PSTs</text></g><g stroke-linecap="round" transform="translate(10 595.70703125) rotate(0 85.501953125 65.900390625)"><path d="M0.49 1.04 C51.29 -0.62, 104.54 0.7, 170.75 -0.54 M-0.57 -0.46 C51.4 0.54, 104.51 0.75, 171.34 0.33 M172.59 0.73 C171 25.26, 170.13 53.25, 170.18 130.96 M171.63 -0.57 C172.74 41.22, 172.02 84.97, 170.11 131.7 M172.17 131.18 C123.07 131.62, 72.98 129.37, 0.53 133.41 M171.52 132.28 C113 130.48, 54.52 131.51, 0.78 132.62 M-0.01 132.08 C0.19 104.97, -1.09 75.73, -1.88 -1.29 M-0.06 132.7 C0.89 97.96, -0.55 64.88, 0.54 -0.36" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(15 649.107421875) rotate(0 80.5 12.5)"><text x="80.5" y="18" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">Permaweb</text></g><g stroke-linecap="round" transform="translate(653.515625 593.13671875) rotate(0 77.619140625 67.16796875)"><path d="M0.9 -1.62 C49.02 -2.14, 95.25 -1.97, 154.45 -0.48 M-0.07 -0.37 C40.92 -1.02, 83.16 -1.31, 155.17 0.52 M157.17 1.76 C153.37 30, 154.99 57.91, 153.57 134.67 M155.57 -0.97 C156.82 33.95, 156.81 68.11, 154.69 133.78 M153.56 136.23 C105.3 137.1, 58.78 136, -1.37 133.71 M155.88 134.78 C98.25 134.84, 41.39 134.18, 0.44 134.63 M0.89 134.87 C0.44 103.15, -1.68 71.68, 0.59 -1.89 M-0.68 134.51 C-0.38 95.65, -0.02 58.09, 0.64 -0.39" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(658.515625 647.8046875) rotate(0 72.5 12.5)"><text x="72.5" y="18" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">SmartWeave</text></g><g transform="translate(261.6328125 336.4765625) rotate(0 142 12.5)"><text x="142" y="18" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#364fc7" text-anchor="middle" style="white-space: pre;" direction="ltr">DataFi</text></g><g stroke-linecap="round"><g transform="translate(170.40625 126.34375) rotate(0 59.2691845131107 60.86571050364523)"><path d="M1 -0.51 C20.59 19.73, 98.84 101.85, 118.47 122.4 M0.07 -1.83 C19.39 18.48, 97.68 102.6, 117.33 123.56" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(170.40625 126.34375) rotate(0 59.2691845131107 60.86571050364523)"><path d="M89.74 109.36 C99.54 114.79, 110.26 118.31, 115.99 124.73 M90.59 109.54 C101.86 114.8, 112.01 120.72, 118.09 124.23" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(170.40625 126.34375) rotate(0 59.2691845131107 60.86571050364523)"><path d="M104.74 95.35 C109.01 106.18, 114.09 114.96, 115.99 124.73 M105.59 95.53 C110.86 106.4, 115.14 117.8, 118.09 124.23" stroke="#364fc7" stroke-width="1" fill="none"></path></g></g><g stroke-linecap="round"><g transform="translate(631.16796875 128.90234375) rotate(0 -60.78494475446644 55.366132151708)"><path d="M1.17 -0.54 C-19.47 18.01, -102.2 92.84, -122.74 111.28 M0.32 1.79 C-20.06 20, -100.02 91.32, -120.59 109.56" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(631.16796875 128.90234375) rotate(0 -60.78494475446644 55.366132151708)"><path d="M-107.25 81.36 C-110.64 92.93, -118.19 105.02, -118.67 111.31 M-106.72 83.74 C-110.94 91.07, -114.63 96.68, -121.22 110.25" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(631.16796875 128.90234375) rotate(0 -60.78494475446644 55.366132151708)"><path d="M-93.61 96.7 C-102.34 102.4, -115.22 108.48, -118.67 111.31 M-93.08 99.07 C-100.99 102.19, -108.4 103.6, -121.22 110.25" stroke="#364fc7" stroke-width="1" fill="none"></path></g></g><g stroke-linecap="round"><g transform="translate(184.1875 592.4296875) rotate(0 60.76498577645049 -59.852834958638994)"><path d="M0.18 -1.15 C20.43 -20.93, 100.14 -99.13, 120.5 -118.92 M-1.19 0.86 C19.52 -19.22, 102.18 -100.65, 122.72 -120.57" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(184.1875 592.4296875) rotate(0 60.76498577645049 -59.852834958638994)"><path d="M107.83 -95.1 C114.09 -97.83, 115.21 -104.37, 122.54 -119.4 M109.46 -93.26 C113.62 -99, 116.7 -105.44, 123.44 -121.15" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(184.1875 592.4296875) rotate(0 60.76498577645049 -59.852834958638994)"><path d="M93.48 -109.76 C102.79 -109.37, 106.99 -112.76, 122.54 -119.4 M95.11 -107.93 C102.41 -110.29, 108.72 -113.42, 123.44 -121.15" stroke="#364fc7" stroke-width="1" fill="none"></path></g></g><g stroke-linecap="round"><g transform="translate(661.92578125 595.71875) rotate(0 -71.81773066101601 -70.58971688114104)"><path d="M0.96 0.52 C-23.02 -23.17, -119.52 -118.12, -143.75 -141.7 M0 -0.26 C-24.13 -23.78, -120.36 -116.36, -144.59 -140.13" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(661.92578125 595.71875) rotate(0 -71.81773066101601 -70.58971688114104)"><path d="M-116.35 -127.54 C-125.68 -132.25, -132.97 -135.36, -143.62 -139.55 M-116.67 -127.8 C-123.68 -129.94, -130.01 -133.81, -145.06 -139.87" stroke="#364fc7" stroke-width="1" fill="none"></path></g><g transform="translate(661.92578125 595.71875) rotate(0 -71.81773066101601 -70.58971688114104)"><path d="M-130.64 -112.81 C-135.58 -122.21, -138.43 -129.91, -143.62 -139.55 M-130.96 -113.07 C-134.82 -118.37, -138.02 -125.46, -145.06 -139.87" stroke="#364fc7" stroke-width="1" fill="none"></path></g></g></svg>
	
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