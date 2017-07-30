const axios = require('axios');

const getGDAXHistoricRates = (productId, start, end, granularity) => {
  productId = productId || 'BTC-USD';
  start = start || '2017-07-21T17:00:00-07:00';
  end = end || '2017-07-28T17:00:00-07:00';
  granularity = granularity || 86400;
  const gdxURL = `https://api.gdax.com/products/${productId}/candles?start=${start}&end=${end}&granularity=${granularity}`;
  return axios.get(gdxURL)
  .then((res) => {
    const filterData = res.data.map((dataPoint) => {
      const date = new Date(dataPoint[0]);
      return { time: date,
        low: dataPoint[1],
        high: dataPoint[2],
        open: dataPoint[3],
        close: dataPoint[4],
        volume: dataPoint[5],
      };
    });
    console.log(filterData);
    return { data: filterData, error: null };
  })
  .catch((err) => {
    console.log('getGDAXHistoricRates error');
    return { data: null, error: err };
  });
};

module.exports.getGDAXHistoricRates = getGDAXHistoricRates;
