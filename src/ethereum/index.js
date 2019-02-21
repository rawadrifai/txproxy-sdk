/**
 * @author Rawad Rifai - rawad@hedgebase.io
 */

import Web3 from 'web3';
import Networks from '../util/networks';

/**
 * This class gives you and object that allows you to
 * perform functions on the Ethereum blockchain.
 */
export class EthereumClient {
  /**
   * @property {string} server the node to connect to
   */
  server;

  /**
   * Creates a new instance of Ripple Client.
   * @param {string} network testnet | mainnet
   */
  constructor(network) {
    if (network) {
      if (network == Networks.TYPES.mainnet)
        this.server = Networks.ETHEREUM.mainnet;
      else this.server = Networks.ETHEREUM.testnet;
    }
  }

  /**
   * This function gets the account balance
   * @returns {Promise} the account balance as a promise
   */
  getBalance(address) {
    var provider = new Web3.providers.HttpProvider(this.server);
    var web3 = new Web3(provider);

    return new Promise((resolve, reject) => {
      web3.eth.getBalance(address, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  /**
   * This function gets the transaction details from a tx hash
   * @param {string} txHash the transaction hash
   * @returns {Promise} the transaction info as a promise
   */
  getTx(txHash) {
    var provider = new Web3.providers.HttpProvider(this.server);
    var web3 = new Web3(provider);

    return new Promise((resolve, reject) => {
      web3.eth.getTransaction(txHash, (err, res) => {
        if (err) reject();
        resolve(res);
      });
    });
  }

  /**
   * This function sends a signed raw transaction to the Ethereum blockchain
   * @param {string} tx the signed transaction
   * @returns {Promise} the transaction hash as a promise
   */
  broadcastTx(tx) {
    var provider = new Web3.providers.HttpProvider(this.server);
    var web3 = new Web3(provider);

    return web3.eth.sendSignedTransaction(tx);
  }
}

export default EthereumClient;
