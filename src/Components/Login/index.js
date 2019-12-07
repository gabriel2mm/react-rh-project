import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Button, TextField, Link, SnackbarContent, Snackbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import firebaseImpl from '../../Utils/firebase';
import firebase from 'firebase';
import './login.css';

export default function Login() {

    const provider = useRef("")
    const history = useHistory()
    const classes = useStyles()
    const [form, setForm] = useState({ email: "", password: "", error: null, snack: { vertical: 'left', horizontal: 'top', open: false } })
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);

    useEffect(() => {
        firebaseImpl.auth().setPersistence('session')
        provider.current = new firebase.auth.GoogleAuthProvider()
    }, []);

    function handleChange(e) {
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmitCredentials(e) {
        e.preventDefault()
        firebaseImpl
            .auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(response => {
                verifyUser(response.user)
            })
            .catch(e => {
                console.log(e);
                setForm({ ...form, error: "Usuário e/ou senha inválidos! Tente novamente.", snack: { ...form.snack, open: true } });
            })
    }

    function handleGoogleLogin(e) {
        e.preventDefault()
        const loginWithGoogle = firebaseImpl.auth().signInWithPopup(provider.current)

        loginWithGoogle.then(response => {
            verifyUser(response.user)
        }).catch(e => {
            console.log(e)
            setForm({ ...form, error: "Não foi possível entrar com o google, tente novamente!", snack: { ...form.snack, open: true } })
        })
    }

    function verifyUser(user) {
        dispatch({ type: 'LOGIN', user: { ...user, logado: 1 } })
    }

    function handleClose() {
        setForm({ ...form, snack: { ...form.snack, open: false } })
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
                        </IconButton>
                    ]}
                />
            </Snackbar>
            {user != null ? history.push('/home') : (<></>)}
            <div className="container-login">
                <div className="login-know-more">
                    <div className="login-padding">
                        <div className="title-know-more">
                            Seja bem-vindo a Curr++
                    </div>
                        <div className="divider"></div>
                        <div className="text-know-more">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <center>
                            <div className="container-button-know-more">
                                <Button variant="outlined" className={classes.knowmore}>
                                    Saiba mais
                                </Button>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="sig-in">
                    <div className="login-padding">
                    <Link href="/esqueci-minha-senha" underline="none" className={classes.ajusteLink}>
                        Ainda não possuo uma conta
                            </Link>
                        <div className="title">
                            <h3>Sigin</h3>
                        </div>
                        <div className="divider black"></div>
                        <form onSubmit={handleSubmitCredentials} autoComplete="off">
                            <div className="container-sigin">
                                <TextField variant="outlined" id="email" margin="normal" fullWidth required name="email" label="E-mail" type="email" value={form.email} onChange={handleChange} />
                                <TextField variant="outlined" min="6" id="password" margin="normal" fullWidth required name="password" label="password" type="password" value={form.password} onChange={handleChange} />
                                <Link href="/esqueci-minha-senha" variant="body2" underline="none">
                                    Esqueceu sua senha?
                                </Link>
                                <div className="Buttons">
                                    <Button variant="outlined" color="primary" type="submit" className={classes.submit}>
                                        Entrar
                                    </Button>
                                    <Button variant="outlined" color="primary" type="submit" className={classes.submit} style={{ marginLeft: '10px' }} onClick={handleGoogleLogin}>
                                        Sigin Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    knowmore: {
        height: '45px',
        color: '#FFF',
        border: '1px solid #FFF'

    },
    title: {
        color: "#333",
    },
    submit: {
        width: '50%',
        margin: theme.spacing(1, 0, 2),
        height: '45px',
        minWidth: "130px"
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
    ajusteLink: {
        marginTop: '-10px'
    }
}))
