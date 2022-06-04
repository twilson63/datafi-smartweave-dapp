import Arweave from 'arweave'
import fs from 'fs'
import Bundlr from '@bundlr-network/client';
import fetch from 'node-fetch'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})
const w = JSON.parse(fs.readFileSync('wallet.json', 'utf-8'))
/*
const source = fs.readFileSync('contract.js', 'utf-8')

const tx = await arweave.createTransaction({ data: source })

tx.addTag('Content-Type', 'application/javascript')
tx.addTag('App-Name', 'SmartWeaveContractSource')
tx.addTag('App-Version', '0.3.0')

await arweave.transactions.sign(tx, w)
await arweave.transactions.post(tx)

console.log('contract source', tx.id)
*/
// permaweb index.html
// permaweb assets/index.....js

// deploy contract with path.manifest 
const CONTRACT_SRC = 'N2oVt_uOMhnrCzTMWSZ0lMmgtqegEKoJ_pi7yDOJCkQ'
const js = '666268d5'
/*
const bundlr = new Bundlr.default("http://node2.bundlr.network", "arweave", w);


const indexHTML = fs.readFileSync('./dist/index.html', 'utf-8')
const arweaveJS = fs.readFileSync('./dist/assets/arweave.9daa5074.js', 'utf-8')
const arWalletJS = fs.readFileSync('./dist/assets/arweave-wallet-connector.4da4094f.js', 'utf-8')
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

// upload index.js
const arweaveJSTx = await bundlr.createTransaction(arweaveJS, {
  tags: [
    { name: 'Content-Type', value: 'application/javascript' }
  ]
})
await arweaveJSTx.sign()
await arweaveJSTx.upload()

// upload index.js
const arWalletJSTx = await bundlr.createTransaction(arWalletJS, {
  tags: [
    { name: 'Content-Type', value: 'application/javascript' }
  ]
})
await arWalletJSTx.sign()
await arWalletJSTx.upload()

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
    },
    [`assets/arweave.9daa5074.js`]: {
      "id": `${arweaveJSTx.id}`
    },
    [`assets/arweave-wallet-connector.4da4094f.js`]: {
      "id": `${arWalletJSTx.id}`
    }
  }
})
*/
const app = '{"manifest":"arweave/paths","version":"0.1.0","index":{"path":"index.html"},"paths":{"index.html":{"id":"AaVpAH1gVzCSCj0mPGwqtXY3bQHE97b8LVx4SFpV1TU"},"assets/index.666268d5.js":{"id":"P9szTE_r7gVqiTEzFPblCqwafj8iDsGLeXZ6irJXcww"},"assets/arweave.9daa5074.js":{"id":"JPzs9tGfERZdwlwnMSz4q6bShJGJfzFzLCdDvsQaDqE"},"assets/arweave-wallet-connector.4da4094f.js":{"id":"kZHTLtadgqxnkfTMpK5LGEsfewHHhLEbkP63U83rw2c"}}}'

const appContract = await arweave.createTransaction({ data: app })
appContract.addTag('Content-Type', 'application/x.arweave-manifest+json')
appContract.addTag('App-Name', 'SmartWeaveContract')
appContract.addTag('App-Version', '0.3.0')
appContract.addTag('Contract-Src', CONTRACT_SRC)
appContract.addTag('Init-State', JSON.stringify({ count: 0 }))


await arweave.transactions.sign(appContract, w)
//await arweave.transactions.post(appContract)
const result = await fetch('https://gateway.redstone.finance/gateway/contracts/deploy', {
  method: 'POST',
  body: JSON.stringify({ contractTx: appContract }),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.ok ? res.json() : res)
console.log(result)
console.log(appContract.id)
