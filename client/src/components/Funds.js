import React from 'react';

const Funds = () => (
  <div>
    <div>
      <p>-----Falcon-----</p>
      <div>
        <table>
          <tr>
            <td>Launch Date</td>
            <td>1-Sep-2017</td>
          </tr>
          <tr>
            <td>Current NAV</td>
            <td>1,100.00</td>
          </tr>
          <tr>
            <td>NAV Date</td>
            <td>25-Jul-2017</td>
          </tr>
          <tr>
            <button>Fund Performance</button>
          </tr>
          <tr>
            <button>EtherScan</button>
          </tr>
        </table>
      </div>
      <div>
        <p>*Insert Pie Chart here*</p>
      </div>
    </div>
    <div>
      <p>-----Fund Performance-----</p>
      <p>*Insert Graph Here*</p>
    </div>
  </div>
);

export default Funds;
