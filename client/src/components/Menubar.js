import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

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
        <MenuItem primaryText="Portfolio" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Actions" leftIcon={<Download />} />
        <MenuItem primaryText="Funds" leftIcon={<Delete />} />
      </Menu>
    </Paper>
  </div>
);

export default Menubar;
