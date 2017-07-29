import { Component } from 'react';
import RTM from 'satori-rtm-sdk';

class Satori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };

    const endpoint = 'wss://open-data.api.satori.com';
    const appKey = 'CecaA07Bd9C6a4DE07EC5EafEcd9424e';
    const channel = 'bitcoin-transactions';

    const client = new RTM(endpoint, appKey);

    client.on('enter-connected', () => {
      // console.log('Connected to Satori RTM!');
    });

    const subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);

    subscription.on('rtm/subscription/data', (pdu) => {
      console.log(pdu.body.messages);
    });

    client.start();
  }
}

export default Satori;
