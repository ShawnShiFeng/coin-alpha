import React, { Component } from 'react';
import RTM from 'satori-rtm-sdk';

class Satori extends Component {
  constructor(props) {
    super(props);
    const initial = { price: '--', volume: '--', ask: '--', bid: '--', exchange: '--' };
    this.state = {
      BTC: initial,
      ETH: initial,
      LTC: initial,
      DASH: initial,
    };
  }

  componentDidMount() {
    const endpoint = 'wss://open-data.api.satori.com';
    const appKey = 'CecaA07Bd9C6a4DE07EC5EafEcd9424e';
    const channel = 'cryptocurrency-market-data';

    const client = new RTM(endpoint, appKey);
    client.on('enter-connected', () => { });
    const subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
    const context = this;
    subscription.on('rtm/subscription/data', (pdu) => {
      const msg = pdu.body.messages[0];
      if (msg.basecurrency.startsWith('USD')) {
        const name = msg.cryptocurrency;
        const newState = {};
        newState[name] = msg;
        context.setState(newState);
      }
    });

    client.start();
  }

  render() {
    const { BTC, ETH, LTC, DOGE, DASH } = this.state;
    return (
      <div className="satori-container">
        <div className="box">
          <h1>BTC</h1>
          Price:{BTC.price} <br />
          Exchange: {BTC.exchange} <br />
          Bid: {BTC.bid} <br />
          Ask: {BTC.ask} <br />
          Volume: {BTC.volume} <br />
        </div>
        <div className="box">
          <h1>ETH</h1>
          Price:{ETH.price} <br />
          Exchange: {ETH.exchange} <br />
          Bid: {ETH.bid} <br />
          Ask: {ETH.ask} <br />
          Volume: {ETH.volume} <br />
        </div>
        <div className="box">
          <h1>LTC</h1>
          Price:{LTC.price} <br />
          Exchange: {LTC.exchange} <br />
          Bid: {LTC.bid} <br />
          Ask: {LTC.ask} <br />
          Volume: {LTC.volume} <br />
        </div>
        <div className="box">
          <h1>DASH</h1>
          Price:{DASH.price} <br />
          Exchange: {DASH.exchange} <br />
          Bid: {DASH.bid} <br />
          Ask: {DASH.ask} <br />
          Volume: {DASH.volume} <br />
        </div>
      </div>
    );
  }
}

export default Satori;
