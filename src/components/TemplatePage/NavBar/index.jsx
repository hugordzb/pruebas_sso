import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import { style } from '../../../styles/NavBar';
import { Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux'
import UserSessionMenu from './UserSessionMenu';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

  redirectToLogin = () => {
    this.props.history.push('/login');
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated, userData } = this.props;
    return (
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          {/*<Typography variant="h6" className={classes.title}>
            {"Aplicaciones"}
    </Typography>*/}
          <Grid container direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={3}>
            <Grid xs="6" sm="1">
              {!isAuthenticated ?
                <Button className={classes.loginButton}
                  onClick={this.redirectToLogin}>
                  <AccountBox />
                  {"Iniciar sesión"}
                </Button> :
                <UserSessionMenu userData={userData} />
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

export default withRouter(withStyles(style)(connect(mapStateToProps, null)(NavBar)));