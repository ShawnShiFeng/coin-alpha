import React, { Component } from 'react';

import renderif from 'render-if';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  FlatButton,
  RaisedButton,
  FontIcon } from 'material-ui';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <span style={{ marginRight: 8}}>
            <img src={'assets/coinAlpha.png'} alt={''} width={35} />
          </span>
          <ToolbarTitle text="Coin Alpha" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
