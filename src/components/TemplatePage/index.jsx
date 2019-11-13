import React, { Component } from 'react';
import { withStyles, CssBaseline } from '@material-ui/core'
import NavBar from './NavBar';
import { style } from '../../styles/TemplatePage'

class TemplatePage extends Component {
  
  render() {
    const { children, classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <header className={classes.header}>
          <NavBar />
        </header>

        <main className={classes.main} >
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(style)(TemplatePage);