import React, { Component } from 'react';
import { withStyles, Grid, Typography, Button } from '@material-ui/core';
import { style } from '../../styles/Whoops404'

class Whoops404 extends Component {
  redirectBackwards = () =>{
    this.props.history.goBack();
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.message404}>
            <span className={classes.blueText}>{"4"}</span>{"0"}<span className={classes.blueText}>{"4"}</span>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.submessage404}>
            {"Página no encontrada"}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button fullWidth variant="contained" color="primary"
            className={classes.submit} onClick={this.redirectBackwards} >
            {"Regresar"}
          </Button>
        </Grid>

      </Grid>
    );
  }
}

export default withStyles(style)(Whoops404);