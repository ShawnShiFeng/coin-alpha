import React from 'react';
import PortfolioSubscription from './Portfolio-Subscription';

const Portfolio = () => (
  <div>
    <div>
      <p>subscription</p>
      <table>
        <tr>
          <td>Fund Name</td>
          <td>Order Size</td>
          <td>Allocation</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
        <tr>
          <td>Falcon</td>
          <td>100,000.00</td>
          <td>50,000.00</td>
          <td>Subscribed</td>
          <td><button>Transfer</button></td>
        </tr>
        <tr>
          <td>Eagle</td>
          <td>200,000.00</td>
          <td>75,000.00</td>
          <td>Subscribed</td>
          <td><button>Transfer</button></td>
        </tr>
      </table>
    </div>
    <div>
      <p>holding details</p>
      <table>
        <tr>
          <td>Tokens</td>
          <td>Tokens</td>
          <td>Purchase NAV</td>
          <td>Initial Investment</td>
          <td>Current NAV</td>
          <td>Current Market Value</td>
          <td>Total Gain $</td>
          <td>Total Gain %</td>
        </tr>
      </table>
      <button type="button">Redeem</button>
    </div>
  </div>
);

export default Portfolio;
