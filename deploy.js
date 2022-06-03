import Arweave from 'arweave'
import fs from 'fs'
import Bundlr from '@bundlr-network/client';

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
const js = 'fc7a161f'
const bundlr = new Bundlr.default("http://node2.bundlr.network", "arweave", w);

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
})

const appContract = await arweave.createTransaction({ data: app })
appContract.addTag('Content-Type', 'application/x.arweave-manifest+json')
appContract.addTag('App-Name', 'SmartWeaveContract')
appContract.addTag('App-Version', '0.3.0')
appContract.addTag('Contract-Src', CONTRACT_SRC)
appContract.addTag('Init-State', JSON.stringify({ count: 0 }))


await arweave.transactions.sign(appContract, w)
await arweave.transactions.post(appContract)

console.log(appContract.id)






