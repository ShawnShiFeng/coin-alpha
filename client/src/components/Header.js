import React, { Component } from 'react';
// import renderif from 'render-if';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  FlatButton,
} from 'material-ui';

class Header extends Component {
  render() {
    const styles = {
      toolbar: {
        backgroundColor: '#333f51',
      },
    };

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <span style={{ marginRight: 8 }}>
            <img src={'assets/coinAlpha.png'} alt={''} width={35} />
          </span>
          <ToolbarTitle text="CoinAlpha" style={{ color: '#6995c9' }}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <a href="/" className="navigation-link"> Home </a>
          <a href="/satori" className="navigation-link"> Market Data </a>
          {/* <a href="/fundlist" className="navigation-link"> Funds </a> */}
          {/* {renderif(this.props.loggedin === true) (
            <div><span>testing text3</span></div>
          )} */}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
