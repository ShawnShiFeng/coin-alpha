import React, { Component } from 'react';
import RTM from 'satori-rtm-sdk';
import moment from 'moment';
import axios from 'axios';

const endpoint = 'wss://l07gw5h6.api.satori.com';
const appKey = '228eB204AbdB08212eB5d5be15b53BB9';
const channelName = 'coinalpha';
const client = new RTM(endpoint, appKey);

class MessageBox extends Component {
  constructor(props) {
    super(props);
    const initialMsg = {
      timeStamp: new Date(),
      who: 'Alphie Bot',
      message: '  Welcome to the CoinAlpha public chatroom. Share your insights with fellow investors.'
    };
    this.state = {
      msgs: [initialMsg],
      myMessage: '',
      show: true,
    };
    this.send = this.send.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    client.on('enter-connected', () => {
      const subscription = client.subscribe(channelName, RTM.SubscriptionMode.SIMPLE);
      const context = this;
      subscription.on('rtm/subscription/data', (pdu) => {
        console.log(pdu.body.messages);
        const current = this.state.msgs.slice(0);
        current.push(pdu.body.messages[0]);
        context.setState({ msgs: current });
      });
    });

    client.start();
  }

  send(e) {
    e.preventDefault();

    if (this.state.myMessage.includes('Alphie') && this.state.myMessage.includes('transcript')) {
      const current = this.state.msgs.slice(0);
      current.push({
        timeStamp: new Date(),
        who: 'Alphie Bot',
        message: 'Got it, I will send this chat transcript to you by email.',
      });
      this.setState({ msgs: current });

      // send chat transcipt
      axios.post('/sendmail', { msgs: this.state.msgs })
      .then(() => {
        console.log('you have successfully sent mails!');
      })
      .catch((err) => {
        console.error(err);
      });
    } else {
      const scrollBox = document.getElementById('message-box-body');
      scrollBox.scrollTop = scrollBox.scrollHeight;
      const m = {
        who: this.props.firstName,
        message: this.state.myMessage,
        timeStamp: new Date(),
      };

      client.publish(channelName, m, (pdu) => {
        if (pdu.action === 'rtm/publish/ok') {
          console.log('message sent');
        } else {
          console.log(pdu.body.error, pdu.body.reason);
        }
      });
    }
    this.setState({ myMessage: '' });
  }

  handleChange(e) {
    this.setState({ myMessage: e.target.value });
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    if (this.state.show) {
      return (
        <div className="message-box-container">
          <div className="message-box-title">
            <div className="message-box-button" onClick={this.toggle}></div>
            CoinAlpha Public Channel
          </div>
          <div id="message-box-body">
            {this.state.msgs.map((msg, i) => {
              return (
                <div key={i} className="message">
                  <div className="time">{moment(msg.timeStamp).format('LTS')}:</div>
                  <div><b>{msg.who}</b>:{msg.message}</div>
                </div>
              );
            })}
          </div>
          <form action="" onSubmit={this.send}>
            <input
              type="text"
              className="my-message"
              value={this.state.myMessage}
              onChange={this.handleChange}
            />
            <input type="submit" value="send" />
          </form>
        </div>
      );
    } else {
      return (
        <div className="hidden-container">
          <div className="message-box-title">
            <div className="message-box-button" onClick={this.toggle}></div>
            CoinAlpha Public Channel
          </div>
        </div>
      );
    }
  }
}

export default MessageBox;
