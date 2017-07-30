exports.seed = (knex, Promise) => {
  return knex('funds').del()
  .then(() => {
    return knex('funds').insert([
      {
        name: 'falcon',
        order_size: 100000,
        allocation: 50000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
        btc_address: 'samplebtcaddress12121212',
        eth_address: 'sampleethaddress12121212',
        ltc_address: 'sampleltcaddress12121212',
        usd_address: 'sampleusdaddress12121212',
        launch_date: new Date(),
      },
      {
        name: 'mocking bird',
        order_size: 80000,
        allocation: 40000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
        btc_address: 'samplebtcaddress12121212',
        eth_address: 'sampleethaddress12121212',
        ltc_address: 'sampleltcaddress12121212',
        usd_address: 'sampleusdaddress12121212',
        launch_date: new Date(),
      },
      {
        name: 'falcon',
        order_size: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
        btc_address: 'samplebtcaddress12121212',
        eth_address: 'sampleethaddress12121212',
        ltc_address: 'sampleltcaddress12121212',
        usd_address: 'sampleusdaddress12121212',
        launch_date: new Date(),
      },
    ]);
  });
};
