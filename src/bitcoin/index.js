/**
 * @author Rawad Rifai - rawad.rifai@gmail.com
 */

// External libraries
const axios = require('axios');
import Networks from '../util/networks';

/**
 * This class gives you and object that allows you to
 * perform functions on the Bitcoin blockchain.
 */
export class BitcoinClient {
  /**
   * @property {string} server the node to connect to
   */
  server;

  /**
   * Creates a new instance of Bitcoin Client.
   * @param {string} network testnet | mainnet
   */
  constructor(network) {
    if (network) {
      if (network == Networks.TYPES.mainnet)
        this.server = Networks.BITCOIN.mainnet;
      else this.server = Networks.BITCOIN.testnet;
    }
  }

  /**
   * This function gets the account balance
   * @async
   * @returns {string} the account balance
   */
  async getBalance(address) {
    const result = await axios.get(
      this.server + '/addrs/' + address + '/balance'
    );

    return result.data.balance;
  }

  /**
   * This function gets a transaction by id or hash
   * @async
   * @param {string} id the transaction hash
   * @returns {Object} the transaction details
   */
  async getTx(id) {
    const txData = await axios.get(this.server + id);

    return txData.data;
  }

  /**
   * This function sends a signed raw transaction to the Bitcoin blockchain
   * @async
   * @param {string} tx the signed transaction hash
   * @returns {Object} the result of the transaction
   */
  async broadcastTx(tx) {
    const response = await axios.post(this.server + 'push', {
      tx: tx.toString()
    });

    return response.data.tx.hash;
  }
}

export default BitcoinClient;
