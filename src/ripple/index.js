/**
 * @author Rawad Rifai - rawad.rifai@gmail.com
 */

const RippleAPI = require('ripple-lib');
import Networks from '../util/networks';

/**
 * This class gives you and object that allows you to
 * perform functions on the Ripple blockchain.
 */
export class RippleClient {
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
        this.server = Networks.RIPPLE.mainnet;
      else this.server = Networks.RIPPLE.testnet;
    }
  }

  /**
   * This function gets the account info as delivered by Ripple.
   * @async
   * @returns {Object} the account info such as: balance
   */
  async getAccountInfo(address) {
    const api = new RippleAPI.RippleAPI({
      server: this.server
    });

    try {
      await api.connect();
      const accountInfo = await api.getAccountInfo(address);
      await api.disconnect();
      return accountInfo;
    } catch (err) {
      api.disconnect();
      return undefined;
    }
  }

  /**
   * This function gets the account balance
   * @async
   * @returns {number} the account balance
   */
  async getBalance(address) {
    const accountInfo = await this.getAccountInfo(address);
    return accountInfo.xrpBalance;
  }

  /**
   * This function gets a transaction by id or hash
   * @async
   * @param {string} id the transaction hash
   * @returns {Object} the transaction details
   */
  async getTx(id) {
    const api = new RippleAPI.RippleAPI({
      server: this.server
    });

    try {
      await api.connect();
      const tx = await api.getTransaction(id);
      await api.disconnect();

      return tx;
    } catch (err) {
      api.disconnect();
      return undefined;
    }
  }

  /**
   * This function sends a signed raw transaction to the Ripple blockchain
   * @async
   * @param {string} tx the signed transaction hash
   * @returns {Object} the result of the transaction
   */
  async broadcastTx(tx) {
    const api = new RippleAPI.RippleAPI({
      server: this.server
    });

    try {
      await api.connect();

      // Submit the transaction
      const res = await api.submit(tx);
      await api.disconnect();
      return res;
    } catch (err) {
      api.disconnect();
      return undefined;
    }
  }
}

export default RippleClient;
