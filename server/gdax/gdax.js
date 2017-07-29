const axios = require('axios');
const getGDXHistoricRates = (productId, start, end, granularity) => {
  productId = productId || 'BTC-USD';
  start = start || '2017-07-21T17:00:00-07:00';
  end = end || '2017-07-28T17:00:00-07:00';
  granularity = granularity || 86400/2;
  const gdxURL = `https://api-public.sandbox.gdax.com/products/${ productId }/candles?start=${ start }&end=${ end }&granularity=${ granularity }`;
  return axios.get(gdxURL)
  .then(res => {
    // [ time, low, high, open, close, volume ]
    const filterData = res.data.map(dataPoint => {
      return { time: dataPoint[0],
        open: dataPoint[3],
        close: dataPoint[4],
      };
    });
    console.log(filterData);
    return { data: filterData, error: null };
  })
  .catch(err => {
    console.log(err);
    return { data: null, error: err };
  });
};

getGDXHistoricRates();
