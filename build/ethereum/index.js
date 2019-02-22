'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.EthereumClient = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _networks = require('../util/networks');

var _networks2 = _interopRequireDefault(_networks);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * This class gives you and object that allows you to
 * perform functions on the Ethereum blockchain.
 */
/**
 * @author Rawad Rifai - rawad@hedgebase.io
 */

var EthereumClient = (exports.EthereumClient = (function() {
  /**
   * Creates a new instance of Ethereum Client.
   * @param {string} network testnet | mainnet
   */
  function EthereumClient(network) {
    (0, _classCallCheck3.default)(this, EthereumClient);

    if (network) {
      if (network == _networks2.default.TYPES.mainnet)
        this.server = _networks2.default.ETHEREUM.mainnet;
      else this.server = _networks2.default.ETHEREUM.testnet;
    }
  }

  /**
   * This function gets the account balance
   * @returns {Promise} the account balance as a promise
   */

  /**
   * @property {string} server the node to connect to
   */

  (0, _createClass3.default)(EthereumClient, [
    {
      key: 'getBalance',
      value: function getBalance(address) {
        var provider = new _web2.default.providers.HttpProvider(this.server);
        var web3 = new _web2.default(provider);

        return new _promise2.default(function(resolve, reject) {
          web3.eth.getBalance(address, function(err, res) {
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
    },
    {
      key: 'getTx',
      value: function getTx(txHash) {
        var provider = new _web2.default.providers.HttpProvider(this.server);
        var web3 = new _web2.default(provider);

        return new _promise2.default(function(resolve, reject) {
          web3.eth.getTransaction(txHash, function(err, res) {
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
    },
    {
      key: 'broadcastTx',
      value: function broadcastTx(tx) {
        var provider = new _web2.default.providers.HttpProvider(this.server);
        var web3 = new _web2.default(provider);

        return web3.eth.sendSignedTransaction(tx);
      }
    }
  ]);
  return EthereumClient;
})());

exports.default = EthereumClient;
