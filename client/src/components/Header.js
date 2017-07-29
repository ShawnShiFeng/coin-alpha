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
            <img src="123.png" alt='favicon' width={35} />
          </span>
          <ToolbarTitle text="BlockChange" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          {renderif(this.props.loggedin === false) (
            <div><span>testing text1</span></div>
          )}
          {renderif(this.props.loggedin === false) (
            <div><span>testing text2</span></div>
          )}
          {renderif(this.props.loggedin === true) (
            <div><span>testing text3</span></div>
          )}
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default Header;

