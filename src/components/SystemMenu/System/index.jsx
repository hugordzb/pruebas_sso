import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { connect } from 'react-redux';
import { style } from '../../../styles/System'
import { withStyles } from '@material-ui/core';
class System extends Component {

  redirectApp = () => {
    let page = 'http://localhost:3001/recertification';
    window.open(`${page}?token=${this.props.userData.token}`, '_blank');
  }

  render() {
    const { app, classes } = this.props;
    return (
      <Button variant="contained" color="primary"
        className={classes.system} onClick={this.redirectApp}>
        <h1 className={classes.systemTitle}>{(app === "S004") ? "Recertificación" : app}</h1>
      </Button>

    );
  }

}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

export const connectedSystem = connect(mapStateToProps, null)(System);

export default withStyles(style)(connectedSystem);