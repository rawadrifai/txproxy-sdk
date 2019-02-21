/**
 * @author Rawad Rifai - rawad.rifai@gmail.com
 */

/**
 * Contains the default network values and types
 */
export class Networks {
  /**
   * @@property {Object} TYPES testnet | mainnet
   */
  static TYPES = {
    testnet: 'testnet',
    mainnet: 'mainnet'
  };
  static BITCOIN = {
    testnet: 'https://api.blockcypher.com/v1/btc/test3',
    mainnet: 'https://blockexplorer.com'
  };
  static ETHEREUM = {
    testnet: 'https://ropsten.infura.io/L8oEX1CRugs7957zJVDa ',
    mainnet: 'https://mainnet.infura.io/L8oEX1CRugs7957zJVDa '
  };
  static RIPPLE = {
    testnet: 'wss://s.altnet.rippletest.net',
    mainnet: 'wss://s1.ripple.com'
  };
}

export default Networks;
