'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Networks = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @author Rawad Rifai - rawad.rifai@gmail.com
 */

/**
 * Contains the default network values and types
 */
var Networks = (exports.Networks = function Networks() {
  (0, _classCallCheck3.default)(this, Networks);
});

Networks.TYPES = {
  testnet: 'testnet',
  mainnet: 'mainnet'
};
Networks.BITCOIN = {
  testnet: 'https://api.blockcypher.com/v1/btc/test3',
  mainnet: 'https://blockexplorer.com'
};
Networks.ETHEREUM = {
  testnet: 'https://ropsten.infura.io/L8oEX1CRugs7957zJVDa ',
  mainnet: 'https://mainnet.infura.io/L8oEX1CRugs7957zJVDa '
};
Networks.RIPPLE = {
  testnet: 'wss://s.altnet.rippletest.net',
  mainnet: 'wss://s1.ripple.com'
};
exports.default = Networks;
