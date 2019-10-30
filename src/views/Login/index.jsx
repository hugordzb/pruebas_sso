import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { loginService } from '../../services/Login'

import {style} from '../../styles/Login'

import { connect } from 'react-redux'

import { authenticate } from '../../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "",
      password: "",
    }
  }

  hangleChangeUser = event => {
    this.setState({ user: event.target.value })
  }

  hangleChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = () => {
    //Norm@n.21!
    const { user, password } = this.state

    let credential = `${user}:${password}`

    let headers = { Credencial: btoa(credential) }
    
    fetch(
      loginService,
      {
        method: 'POST',
        headers: headers,
      }
    ).then(
      response => response.json()
    ).then(
      data => {
        let {Bandera} = data
        if (Bandera === true) {
          this.props.authenticate(data)
          this.props.history.push('/home')
        }
      }
    ).catch(e => {
      console.log(e);
    });

  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
                    </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              autoFocus
              ref="_user"
              value={this.state.user}
              onChange={this.hangleChangeUser}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              ref="_password"
              value={this.state.password}
              onChange={this.hangleChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              //type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Iniciar sesión
                        </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste la contraseña?
                                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

//const mapStateToProps = () => null
const mapDispatchToProps = dispatch => ({
  authenticate: value => dispatch(authenticate(value))
})

const loginConnected = connect(null, mapDispatchToProps)(Login)

export default withRouter(withStyles(style)(loginConnected))