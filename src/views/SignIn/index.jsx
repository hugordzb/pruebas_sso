import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Button, Checkbox,
  FormControlLabel, TextField, LinearProgress,
  withStyles, Grid
} from '@material-ui/core';
import { signIn } from '../../redux/actions';
import { style } from '../../styles/Login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      isLoading: false,
      password: "",
    };
  }

  hangleChangeUserId = event => {
    this.setState({ userId: event.target.value });
  }

  hangleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = () => {
    const { signIn } = this.props;
    const { userId, password } = this.state;
    let credential = btoa(`${userId}:${password}`);
    signIn(credential);
  }

  render() {
    const { classes, isLoading } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6} sm={3} className={classes.containerLogin}>
            <div className={classes.paper}>
              <h1 className={classes.title}>
                {"Bienvenido a"}
              </h1>
              <h1 className={classes.title}>
                <span className={classes.blueText}>{"Single"}</span>{"SignOn"}
              </h1>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userId"
                  placeholder="Usuario"
                  name="userId"
                  autoFocus
                  value={this.state.userId}
                  onChange={this.hangleChangeUserId}
                  className={classes.inputTruper}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.hangleChangePassword}
                  className={classes.inputTruper}
                />
                <div className={classes.mtb2}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" className={classes.checkboxTruper} />}
                    label="Recuérdame"
                  />
                </div>
                {!isLoading ?
                  <Button fullWidth variant="contained" color="primary"
                    className={classes.submit} onClick={this.handleSubmit} >
                    {"Iniciar sesión"}
                  </Button>
                  :
                  <LinearProgress />
                }
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = dispatch => ({
  signIn: credential => dispatch(signIn(credential))
});

const loginConnected = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(withStyles(style)(loginConnected));