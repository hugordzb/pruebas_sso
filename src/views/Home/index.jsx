import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SystemMenu from '../../components/SystemMenu';

import { connect } from 'react-redux';
import TemplatePage from '../../components/TemplatePage';
import { withStyles, Grid } from '@material-ui/core';

import { style } from '../../styles/Home';

class Home extends React.Component {
  render() {
    const { userData, classes } = this.props;
    return (
      <TemplatePage>
        <Grid container
          direction="column"
          justify="center"
          alignItems="flex-start" className={classes.root}>
          <Grid item>
            <span className={classes.title}>
              {"Bienvenido a"}
            </span>
          </Grid>
          <Grid item>
            <span className={classes.title}><span className={classes.blueText}>{"Single"}</span>{"SignOn"}</span>
          </Grid>

          <Grid item className={classes.greetingMessage}>
            <span>Todo lo que necesitas en un solo lugar.</span>
          </Grid>
          {
            userData.apps.length > 0 ?
              <SystemMenu apps={userData.apps}></SystemMenu> :
              <Grid item><span className={classes.greetingMessage}>No se tienen sistemas registrados en esta cuenta.</span></Grid>
          }
        </Grid>
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