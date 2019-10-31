import React, { Component } from 'react'
import Aplicacion from './Application'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});

class AppMenu extends Component {
  renderApps = () => {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={12}>
          <Grid container justify="center" spacing={4}>
            {this.props.apps.map((app, i) => <Aplicacion key={i} app={app}></Aplicacion>)}
          </Grid>
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <>
        {this.renderApps()}
      </>
    )
  }
}

export default withStyles(styles)(AppMenu)