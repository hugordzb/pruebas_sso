import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SystemMenu from '../../components/SystemMenu';

import { connect } from 'react-redux';
import TemplatePage from '../../components/TemplatePage';
import { Typography, withStyles } from '@material-ui/core';

import { style } from '../../styles/Home';

class Home extends React.Component {
  render() {
    const { userData, classes } = this.props;
    return (
      <TemplatePage>
        <h1>
          {"Bienvenido a"}
        </h1>
        <h1>
          <span className={classes.blueText}>{"Single"}</span>{"SignOn"}
        </h1>
        <p>Todo lo que necesitas en un solo lugar</p>
        {
          userData.apps.length > 0 ?
            <SystemMenu apps={userData.apps}></SystemMenu> :
            <Typography variant="h6">No se tienen sistemas registrados en esta cuenta</Typography>
        }
      </TemplatePage >
    )
  }
}

Home.prototypes = {
  userId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  userData: state.authenticate.userData,
  isAuthenticated: state.authenticate.isAuthenticated,
});

const HomeConnected = connect(mapStateToProps, null)(Home);

const styledConnectedHome = withStyles(style)(HomeConnected);

export default withRouter(styledConnectedHome)