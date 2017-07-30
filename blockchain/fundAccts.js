const ethHelpers = require('./helpers');
const mmWallets = require('./mmWallets');

mmWallets.forEach(wallet => (ethHelpers.fundFromMint(10000, wallet)));
