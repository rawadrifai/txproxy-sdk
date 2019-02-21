/**
 * Gets transaction details from the blockchain
 * @param {string} txHash the transaction hash
 * @param {string} chain the desired blockchain
 * @param {string} net the network
 * @returns {Object} the transaction as returned from the blockchain
 */
var getTx = async (txHash, chain, net) => {
  return {};
};

/**
 * Broadcasts a transaction to the blockchain
 * @param {string} tx the signed transaction
 * @param {string} chain the desired blockchain
 * @param {string} net the network
 * @returns {Object} the transaction hash
 */
var broadcastTx = async (tx, chain, net) => {
  return {};
};

module.exports = { getTx, broadcastTx };
