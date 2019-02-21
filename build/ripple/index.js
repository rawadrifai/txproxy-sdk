'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.RippleClient = undefined;

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

var RippleAPI = require('ripple-lib');

/**
 * This class gives you and object that allows you to
 * perform functions on the Ripple blockchain.
 */
var RippleClient = (exports.RippleClient = (function() {
  /**
   * Creates a new instance of Ripple Client.
   * @param {string} network testnet | mainnet
   */
  function RippleClient(network) {
    (0, _classCallCheck3.default)(this, RippleClient);

    if (network) {
      if (network == _networks2.default.TYPES.mainnet)
        this.server = _networks2.default.RIPPLE.mainnet;
      else this.server = _networks2.default.RIPPLE.testnet;
    }
  }

  /**
   * This function gets the account info as delivered by Ripple.
   * @async
   * @returns {Object} the account info such as: balance
   */

  /**
   * @property {string} server the node to connect to
   */

  (0, _createClass3.default)(RippleClient, [
    {
      key: 'getAccountInfo',
      value: (function() {
        var _ref = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee(address) {
            var api, accountInfo;
            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      api = new RippleAPI.RippleAPI({
                        server: this.server
                      });
                      _context.prev = 1;
                      _context.next = 4;
                      return api.connect();

                    case 4:
                      _context.next = 6;
                      return api.getAccountInfo(address);

                    case 6:
                      accountInfo = _context.sent;
                      _context.next = 9;
                      return api.disconnect();

                    case 9:
                      return _context.abrupt('return', accountInfo);

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context['catch'](1);

                      api.disconnect();
                      return _context.abrupt('return', undefined);

                    case 16:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[1, 12]]
            );
          })
        );

        function getAccountInfo(_x) {
          return _ref.apply(this, arguments);
        }

        return getAccountInfo;
      })()

      /**
       * This function gets the account balance
       * @async
       * @returns {number} the account balance
       */
    },
    {
      key: 'getBalance',
      value: (function() {
        var _ref2 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee2(address) {
            var accountInfo;
            return _regenerator2.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return this.getAccountInfo(address);

                    case 2:
                      accountInfo = _context2.sent;
                      return _context2.abrupt('return', accountInfo.xrpBalance);

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

        function getBalance(_x2) {
          return _ref2.apply(this, arguments);
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
        var _ref3 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee3(id) {
            var api, tx;
            return _regenerator2.default.wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      api = new RippleAPI.RippleAPI({
                        server: this.server
                      });
                      _context3.prev = 1;
                      _context3.next = 4;
                      return api.connect();

                    case 4:
                      _context3.next = 6;
                      return api.getTransaction(id);

                    case 6:
                      tx = _context3.sent;
                      _context3.next = 9;
                      return api.disconnect();

                    case 9:
                      return _context3.abrupt('return', tx);

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3['catch'](1);

                      api.disconnect();
                      return _context3.abrupt('return', undefined);

                    case 16:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              this,
              [[1, 12]]
            );
          })
        );

        function getTx(_x3) {
          return _ref3.apply(this, arguments);
        }

        return getTx;
      })()

      /**
       * This function sends a signed raw transaction to the Ripple blockchain
       * @async
       * @param {string} tx the signed transaction hash
       * @returns {Object} the result of the transaction
       */
    },
    {
      key: 'broadcastTx',
      value: (function() {
        var _ref4 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee4(tx) {
            var api, res;
            return _regenerator2.default.wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      api = new RippleAPI.RippleAPI({
                        server: this.server
                      });
                      _context4.prev = 1;
                      _context4.next = 4;
                      return api.connect();

                    case 4:
                      _context4.next = 6;
                      return api.submit(tx);

                    case 6:
                      res = _context4.sent;
                      _context4.next = 9;
                      return api.disconnect();

                    case 9:
                      return _context4.abrupt('return', res);

                    case 12:
                      _context4.prev = 12;
                      _context4.t0 = _context4['catch'](1);

                      api.disconnect();
                      return _context4.abrupt('return', undefined);

                    case 16:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              this,
              [[1, 12]]
            );
          })
        );

        function broadcastTx(_x4) {
          return _ref4.apply(this, arguments);
        }

        return broadcastTx;
      })()
    }
  ]);
  return RippleClient;
})());

exports.default = RippleClient;
