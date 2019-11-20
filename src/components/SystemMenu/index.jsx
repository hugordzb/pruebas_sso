import React, { Component } from 'react'
import System from './System'
import { Grid } from '@material-ui/core'

class SystemMenu extends Component {

  renderApps = () => {
    return (
      <Grid item container
        direction="row"
        justify="center"
        alignItems="flex-start" spacing={0}>
          {this.props.apps.map((app, i) => <System key={i} app={app}></System>)}
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

export default SystemMenu;