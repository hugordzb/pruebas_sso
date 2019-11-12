import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBox from '@material-ui/icons/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from '../../../styles/NavBar';
import { Button, IconButton } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import UserSessionMenu from './UserSessionMenu';

class NavBar extends Component {

  redirectToLogin = () => {
    this.props.history.push('/login');
  }

  render() {
    const { classes } = this.props;
    const { title, displayName, department, isAuthenticated } = this.props;
    return (
      <AppBar className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"Aplicaciones TRUPER"}
          </Typography>
          {!isAuthenticated ?
            <Button
              className={classes.loginButton}
              onClick={this.redirectToLogin}
            >
              <AccountBox />
              {"Iniciar sesión"}
            </Button> :
            <UserSessionMenu title={title.replace(/"/g, "")} displayName={displayName} department={department} />
          }
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  title: state.authenticate.user.title,
  displayName: state.authenticate.user.displayName,
  department: state.authenticate.user.department,
  isAuthenticated: state.authenticate.user.isAuthenticated,
});

const connectedNavBar = connect(mapStateToProps, null)(NavBar);

export default withRouter(withStyles(style)(connectedNavBar))