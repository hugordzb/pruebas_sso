import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';

import { connect } from 'react-redux';
import { style } from '../../../styles/System'
import { withStyles } from '@material-ui/core';
import RecertificationIcon from '../../../assets/img/recertificacion.svg';
class System extends Component {

  redirectApp = () => {
    let page = 'http://localhost:3001/recertification';
    window.open(`${page}?token=${this.props.userData.token}`, '_blank');
  }

  render() {
    const { app, classes } = this.props;
    return (
      <Grid item container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.system}
        xs={12} sm={6} md={4} lg={3} xl={2} >
        <Grid item container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <img width="25%" className={classes.systemIcon} src={RecertificationIcon} alt="Recertification icon" />
          <h1 className={classes.systemTitle}>{(app === "S001") ? "Recertificación" : app}</h1>
          <p className={classes.systemDescription}>asdasdasdasdsadsada{app.description}</p>

        </Grid>

        <Button variant="contained" color="primary"
          className={classes.systemButton} onClick={this.redirectApp}>
          {"Ingresar"}
        </Button>
      </Grid>
    );
  }

}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

export const connectedSystem = connect(mapStateToProps, null)(System);

export default withStyles(style)(connectedSystem);