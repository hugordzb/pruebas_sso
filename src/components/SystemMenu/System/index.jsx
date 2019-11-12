import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { connect } from 'react-redux';

class System extends Component {

  redirectApp = () => {
    let page = 'http://localhost:3001';
    window.open(`${page}?token=${this.props.userData.token}`, '_blank');
  }

  render() {
    const { app } = this.props
    
    return (
      <Button onClick={this.redirectApp}>
        {(app === "S004") ? "Recertificación" : app}
      </Button>
    );
  }

}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

export default connect(mapStateToProps, null)(System);