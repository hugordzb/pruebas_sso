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
        xs={12} sm={6} md={6} lg={4} xl={3} >

        <Grid item container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={3} sm={3}>
            <img width="100%" className={classes.systemIcon} src={RecertificationIcon} alt="Recertification icon" />
          </Grid>
          <Grid item container 
          direction="column"
          xs={9} sm={9}>
            <Grid item xs={12} sm={12}>
            <span className={classes.systemTitle}>{(app === "S001") ? "Recertificación" : app}</span>
            </Grid>
            <Grid item xs={12} sm={12}>
            <span className={classes.systemDescription}>Descripción{app.description}</span>
            </Grid>
          </Grid>

        </Grid>


        <Button variant="contained" color="primary"
          className={classes.systemButton} onClick={this.redirectApp}>
         <small>{"Ingresar"}</small> 
        </Button>
      </Grid>
    );
  }

}

const mapStateToProps = state => ({
  userData: state.authentication.userData,
  isAuthenticated: state.authentication.isAuthenticated,
});

export const connectedSystem = connect(mapStateToProps, null)(System);

export default withStyles(style)(connectedSystem);