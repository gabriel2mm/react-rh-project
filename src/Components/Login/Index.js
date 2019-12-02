import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router";
import { Button, TextField, Grid, Typography, Link, SnackbarContent, Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import firebaseImpl from '../../Utils/firebase';
import firebase from 'firebase';
import GoogleButton from 'react-google-button';
import './login.css';

export default function Login() {

    const provider = useRef("");
    const history = useHistory();
    const classes = useStyles();
    const [form, setForm] = useState({ email: "", password: "", error: null, snack: { vertical: 'left', horizontal: 'top', open: false } });

    useEffect(() => {
        provider.current = new firebase.auth.GoogleAuthProvider();
    }, []);

    function handleChange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmitCredentials(e) {
        e.preventDefault();
        firebaseImpl
            .auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(r => {
                history.push("/home")
            })
            .catch(e => {
                setForm({ ...form, error: "Usuário e/ou senha inválidos! Tente novamente.", snack: { ...form.snack, open: true } });
            });
    }

    function handleGoogleLogin(e) {
        e.preventDefault();
        const loginWithGoogle = firebaseImpl.auth().signInWithPopup(provider.current);

        loginWithGoogle.then(response => {
            history.push("/home")
        }).catch(e => {
            setForm({ ...form, error: "Não foi possível entrar com o google, tente novamente!", snack: { ...form.snack, open: true } });
        });
    }

    function handleClose() {
        setForm({ ...form, snack: { ...form.snack, open: false } });
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={form.snack.open}
                onClose={handleClose}
                autoHideDuration={6000}
            >
                <SnackbarContent
                    className={classes.error}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            <ErrorIcon className={classes.iconVariant} />
                            {form.error}
                        </span>
                    }
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon className={classes.icon} />
                        </IconButton>,
                    ]}
                />
            </Snackbar>
            <Typography component="h1" variant="h5" align="center" className={classes.title}>
                RDCurriculum
            </Typography>
            <form onSubmit={handleSubmitCredentials} autoComplete="off">
                <div className="form-container">
                    <Grid container direction="column" justify="space-around" alignItems="stretch">
                        <TextField variant="outlined" id="email" margin="normal" fullWidth required name="email" label="E-mail" type="email" value={form.email} onChange={handleChange} />
                        <TextField variant="outlined" min="6" id="password" margin="normal" fullWidth required name="password" label="password" type="password" value={form.password} onChange={handleChange} />
                        <Link href="/esqueci-minha-senha" variant="body2" underline="none">
                            Esqueceu sua senha?
                        </Link>
                        <Button variant="outlined" color="primary" type="submit" className={classes.submit}>
                            Entrar
                        </Button>
                        <GoogleButton onClick={handleGoogleLogin} label='Entrar com o google' style={{ width: '100%', marginBottom: '10px' }} />
                        <center>
                            <Link href="/esqueci-minha-senha" variant="body2" underline="none">
                                Ainda não possuo uma conta !
                            </Link>
                        </center>
                    </Grid>
                </div>
            </form>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        color: "#FFF",
        position: "relative",
        top: '70px'
    },
    submit: {
        margin: theme.spacing(5, 0, 2),
        height: '45px'
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));