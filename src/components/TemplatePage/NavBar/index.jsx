import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from '../../../styles/NavBar';
import { Button, IconButton } from '@material-ui/core';
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
      <AppBar className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"Aplicaciones"}
          </Typography>
          {!isAuthenticated ?
            <Button className={classes.loginButton}
              onClick={this.redirectToLogin}>
              <AccountBox />
              {"Iniciar sesión"}
            </Button> :
            <UserSessionMenu userData={userData} />
          }
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