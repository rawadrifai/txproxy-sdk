# txproxy-sdk

This is a bridge to several blockchains. There are only 2 functions. getTx and broadcastTx.

## Installation

---

`yarn add txproxy`

## Examples

---

`const TxProxy = require('txproxy').TxProxy;`  
`const tx = TxProxy.getTx('your tx hash', 'bitcoin', 'testnet');`

The first parameter is your transaction hash.  
The second parameter is the blockchain: bitcoin | ethereum | ripple.  
The third parameter is the network: testnet | mainnet

## Networks

---

We use the following bridges:

### BITCOIN

testnet: 'https://api.blockcypher.com/v1/btc/test3'  
mainnet: 'https://blockexplorer.com'

### ETHEREUM

testnet: 'https://ropsten.infura.io/'  
mainnet: 'https://mainnet.infura.io/'

### RIPPLE

testnet: 'wss://s.altnet.rippletest.net'  
mainnet: 'wss://s1.ripple.com'
