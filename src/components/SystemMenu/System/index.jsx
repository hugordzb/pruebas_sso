import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { connect } from 'react-redux';
import { classes } from 'istanbul-lib-coverage';
import { style } from '../../../styles/System';
import { withStyles } from '@material-ui/core';
class System extends Component {

  redirectApp = () => {
    let page = 'http://localhost:3001/recertification';
    window.open(`${page}?token=${this.props.userData.token}`, '_blank');
  }

  render() {
    const { app } = this.props
    
    return (
      <Button className={classes.system} onClick={this.redirectApp}>
        {(app === "S004") ? "Recertificación" : app}
      </Button>
    );
  }

}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

export const styledSystem = withStyles(style)(System);

export default connect(mapStateToProps, null)(styledSystem);