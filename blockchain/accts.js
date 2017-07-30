const Web3 = require('web3');
const EthUtil = require('ethereumjs-util');

const PORT = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${PORT}`));


// Wallet address helper functions

const hexToBytes = (hex) => {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

const privateKeyToAddress = privateKey =>
  `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`;

const mint = {
  balance: web3.toWei(1000000000, 'ether'),
  secretKey: web3.sha3('InGodWeTrust'),
};

const mintWallet = privateKeyToAddress(mint.secretKey.substr(2, 64));

const userKeys = [mint];

module.exports = {
  userKeys,
  mintWallet,
};

