import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Portfolio from 'material-ui/svg-icons/action/account-balance';
import Actions from 'material-ui/svg-icons/action/account-box';
import Funds from 'material-ui/svg-icons/action/assessment';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const Menubar = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Welcome XXXXXX" />
        <Divider />
        <MenuItem primaryText="Portfolio" leftIcon={<Portfolio />} />
        <MenuItem primaryText="Actions" leftIcon={<Actions />} />
        <MenuItem primaryText="Funds" leftIcon={<Funds />} />
      </Menu>
    </Paper>
  </div>
);

export default Menubar;
