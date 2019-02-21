'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Gets transaction details from the blockchain
 * @param {string} txHash the transaction hash
 * @param {string} chain the desired blockchain
 * @param {string} net the network
 * @returns {Object} the transaction as returned from the blockchain
 */
var getTx = (function() {
  var _ref = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee(
      txHash,
      chain,
      net
    ) {
      return _regenerator2.default.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt('return', {});

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        undefined
      );
    })
  );

  return function getTx(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Broadcasts a transaction to the blockchain
 * @param {string} tx the signed transaction
 * @param {string} chain the desired blockchain
 * @param {string} net the network
 * @returns {Object} the transaction hash
 */
var broadcastTx = (function() {
  var _ref2 = (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee2(tx, chain, net) {
      return _regenerator2.default.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                return _context2.abrupt('return', {});

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        },
        _callee2,
        undefined
      );
    })
  );

  return function broadcastTx(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();

module.exports = { getTx: getTx, broadcastTx: broadcastTx };