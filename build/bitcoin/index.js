'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.BitcoinClient = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _networks = require('../util/networks');

var _networks2 = _interopRequireDefault(_networks);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @author Rawad Rifai - rawad.rifai@gmail.com
 */

// External libraries
var axios = require('axios');

/**
 * This class gives you and object that allows you to
 * perform functions on the Bitcoin blockchain.
 */
var BitcoinClient = (exports.BitcoinClient = (function() {
  /**
   * Creates a new instance of Ripple Client.
   * @param {string} network testnet | mainnet
   */
  function BitcoinClient(network) {
    (0, _classCallCheck3.default)(this, BitcoinClient);

    if (network) {
      if (network == _networks2.default.TYPES.mainnet)
        this.server = _networks2.default.RIPPLE.mainnet;
      else this.server = _networks2.default.RIPPLE.testnet;
    }
  }

  /**
   * This function gets the account balance
   * @async
   * @returns {string} the account balance
   */

  /**
   * @property {string} server the node to connect to
   */

  (0, _createClass3.default)(BitcoinClient, [
    {
      key: 'getBalance',
      value: (function() {
        var _ref = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee(address) {
            var result;
            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return axios.get(
                        this.bitcoinAdapter.blockExplorer +
                          '/addrs/' +
                          address +
                          '/balance'
                      );

                    case 2:
                      result = _context.sent;
                      return _context.abrupt('return', result.data.balance);

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );

        function getBalance(_x) {
          return _ref.apply(this, arguments);
        }

        return getBalance;
      })()

      /**
       * This function gets a transaction by id or hash
       * @async
       * @param {string} id the transaction hash
       * @returns {Object} the transaction details
       */
    },
    {
      key: 'getTx',
      value: (function() {
        var _ref2 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee2(id) {
            var txData;
            return _regenerator2.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return axios.get(
                        this.bitcoinAdapter.blockExplorer + '/txs/' + id
                      );

                    case 2:
                      txData = _context2.sent;
                      return _context2.abrupt('return', txData.data);

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              this
            );
          })
        );

        function getTx(_x2) {
          return _ref2.apply(this, arguments);
        }

        return getTx;
      })()

      /**
       * This function sends a signed raw transaction to the Bitcoin blockchain
       * @async
       * @param {string} tx the signed transaction hash
       * @returns {Object} the result of the transaction
       */
    },
    {
      key: 'broadcastTx',
      value: (function() {
        var _ref3 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee3(tx) {
            var response;
            return _regenerator2.default.wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.next = 2;
                      return axios.post(
                        this.bitcoinAdapter.blockExplorer + '/txs/push',
                        {
                          tx: tx.toString()
                        }
                      );

                    case 2:
                      response = _context3.sent;
                      return _context3.abrupt('return', response.data.tx.hash);

                    case 4:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              this
            );
          })
        );

        function broadcastTx(_x3) {
          return _ref3.apply(this, arguments);
        }

        return broadcastTx;
      })()
    }
  ]);
  return BitcoinClient;
})());

exports.default = BitcoinClient;
