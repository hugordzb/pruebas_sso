import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Footer extends Component {
  render() {
    const today = new Date();
    return (
        <Typography className={'footerMessage'}>
          &copy; Truper {today.getFullYear()}
        </Typography>
    );
  }
}

export default Footer;