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

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.submit = this.submit.bind(this)
    }

    submit(e){
        const { _usuario, _contrasenia } = this.refs
        e.preventDefault();
        console.log(`Usuario y contraseña= ${_usuario.value}, ${_contrasenia.value}`)
    }

    handleSubmit = () => {
        alert("Validando...")

        let usuario = "mgmolinae"
        let contrasenia = "Norm@n.21!"

        let credencial = btoa(`${usuario}:${contrasenia}`)

        const data = {Credencial: credencial};
        
        console.log(data)

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: data,
        }).then(
            response => response.json()
        ).then(
            data => {
                let {Bandera, Usuario, Token, Apps} = data
                
                if(Bandera===true){
                    console.log(Usuario)
                    console.log(Token)
                    console.log(Apps)
                    this.props.history.push('/home')
                }
            }
        )
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
                    <form className={classes.form} /*onSubmit={this.submit}*/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="usuario"
                            label="Usuario"
                            name="usuario"
                            autoFocus
                            ref="_usuario"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="contrasenia"
                            label="Contraseña"
                            type="password"
                            id="contrasenia"
                            ref="_contrasenia"
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

export default withRouter(withStyles(styles)(Login))