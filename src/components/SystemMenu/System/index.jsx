import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    maxWidth: 345,
  },
});

class System extends Component {

  redirectApp = () => {
    window.location.href = `http://localhost:3001?userId=${this.props.userId}&token=${this.props.token}`;
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
  userId: state.authenticate.user.userId,
  token: state.authenticate.user.token
});

const connectedSystem = connect(mapStateToProps, null)(System);

export default withStyles(styles)(connectedSystem)