import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from '../../styles/NavBar';
import { Button, IconButton } from '@material-ui/core';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux'


class NavBar extends Component {
  redirectToLogin = () => {
    return <Redirect to='/login' />
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"Aplicaciones TRUPER"}
          </Typography>
          {!this.props.isAuthenticated ?
            <Button
              className={classes.loginButton}
              onClick={this.redirectToLogin}
            >
              <AccountBox />
              {"Iniciar sesión"}
            </Button> :
            <Button className={classes.sessionButton}>
              <AccountCircle />
            </Button>}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.userId,
  isAuthenticated: state.user.isAuthenticated,
});

const connectedNavBar = connect(mapStateToProps, null)(NavBar);

export default withStyles(style)(connectedNavBar)