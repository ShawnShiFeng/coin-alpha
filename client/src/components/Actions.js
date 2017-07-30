import React from 'react';

const Actions = () => (
  <div>
    <div>
      <p>Where Are You Based?</p>
      <select>
        <option value="USA">USA</option>
        <option value="Singapore">Singapore</option>
      </select>
    </div>
    <div>
      <p>Confirm Email</p>
      <input type="text" />
    </div>
    <div>
      <p>Official Identification</p>
      <button>upload official ID</button>
      <br />
      <button>upload passport</button>
      <br />
      <button>upload e-signature</button>
    </div>
    <div>
      <p>Investor Credentials</p>
      <input id="option1" type="checkbox" />
      <label htmlFor="option1">Accredited U.S. Investor (Reg D)</label>
      <br />
      <input id="option2" type="checkbox" />
      <label htmlFor="option2">Non U.S. Investor (Reg S)</label>
    </div>
  </div>
);

export default Actions;
