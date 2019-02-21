import { BitcoinClient } from '../bitcoin';
import { EthereumClient } from '../ethereum';
import { RippleClient } from '../ripple';

/**
 * Gets transaction details from the blockchain
 * @param {string} txHash the transaction hash
 * @param {string} chain the desired blockchain
 * @param {string} net the network: testnet | mainnet
 * @returns {Object} the transaction as returned from the blockchain
 */
var getTx = async (txHash, chain, net) => {
  let client;

  switch (chain) {
    case 'bitcoin':
      client = new BitcoinClient(net);
      break;

    case 'ethereum':
      client = new EthereumClient(net);
      break;

    case 'ripple':
      client = new RippleClient(net);
      break;
  }

  const result = await client.getTx(txHash);
  return result;
};

/**
 * Broadcasts a transaction to the blockchain
 * @param {string} tx the signed transaction
 * @param {string} chain the desired blockchain
 * @param {string} net the network
 * @returns {string} the transaction hash
 */
var broadcastTx = async (tx, chain, net) => {
  let client;

  switch (chain) {
    case 'bitcoin':
      client = new BitcoinClient(net);
      break;

    case 'ethereum':
      client = new EthereumClient(net);
      break;

    case 'ripple':
      client = new RippleClient(net);
      break;
  }

  const result = await client.broadcastTx(tx);
  return result;
};

module.exports = { getTx, broadcastTx };
