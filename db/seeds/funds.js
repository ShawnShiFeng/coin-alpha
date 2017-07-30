const Web3 = require('web3');

const PORT = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${PORT}`));

exports.seed = (knex, Promise) => {
  return knex('funds').del()
  .then(() => {
    return knex('funds').insert([
      {
        name: 'Falcon Fund',
        description: 'Automated price trends and momentum strategy on a basket of most actively traded cryptocurrencies: Bitcoin, Ethereum, and Litecoin',
        order_size: 100000,
        allocation: 50000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
        btc_address: web3.sha3(`text${Math.random()}`),
        eth_address: web3.sha3(`text${Math.random()}`),
        ltc_address: web3.sha3(`text${Math.random()}`),
        usd_address: web3.sha3(`text${Math.random()}`),
        launch_date: new Date(),
      },
      {
        name: 'Crypto Index',
        description: 'Long strategy on a basket of cryptocurrencies, market capitalization weighted',
        order_size: 80000,
        allocation: 40000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
        btc_address: web3.sha3(`text${Math.random()}`),
        eth_address: web3.sha3(`text${Math.random()}`),
        ltc_address: web3.sha3(`text${Math.random()}`),
        usd_address: web3.sha3(`text${Math.random()}`),
        launch_date: new Date(),
      },
      {
        name: 'ICO Fund',
        description: 'Strategy to invest early in new ICOs.',
        order_size: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
        btc_address: web3.sha3(`text${Math.random()}`),
        eth_address: web3.sha3(`text${Math.random()}`),
        ltc_address: web3.sha3(`text${Math.random()}`),
        usd_address: web3.sha3(`text${Math.random()}`),
        launch_date: new Date(),
      },
    ]);
  });
};
