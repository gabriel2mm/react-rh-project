import React, { useState } from 'react';
import { green } from '@material-ui/core/colors';
import { Button, TextField, Grid, Typography, SnackbarContent, Snackbar, IconButton, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebaseImpl from '../../Utils/firebase';

export default function ForgotPassword() {
    const classes = useStyles();
    const [form, setForm] = useState({ email: "", error: null, classe: "", snack: { open: false } });

    function handleChange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmitCredentials(e) {
        e.preventDefault();
        const user = firebaseImpl
            .auth()
            .sendPasswordResetEmail(form.email);

        user.then(response => {
            setForm({ ...form, error: "Solicitação enviada!", classe: "success", snack: { open: true } })
        }).catch(e => {
            setForm({ ...form, classe: "error", error: "Não foi possível validar e-mail, verifique e tente novamente!", snack: { open: true } })
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
                    className={classes[form.classe]}
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
            <form onSubmit={handleSubmitCredentials} autoComplete="off">
                <div className="form-container">
                    <div className={classes.backLogo}>
                        <Typography component="h1" variant="h5" align="center" className={classes.title}>
                            RDCurriculum
                        </Typography>
                        <div>
                            <Link href="/login" underline="none"> <ArrowBackIcon /> <div className={classes.voltar}>Voltar</div></Link>
                        </div>
                    </div>
                    <Grid container direction="column" justify="space-around" alignItems="stretch">
                        <TextField variant="outlined" id="email" margin="normal" fullWidth required name="email" label="E-mail" type="email" value={form.email} onChange={handleChange} />
                        <Button variant="outlined" color="primary" type="submit" className={classes.submit}>
                            Enviar senha
                        </Button>
                    </Grid>
                </div>
            </form>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    backLogo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'center',

    },
    success: {
        backgroundColor: green[600],
    },
    voltar: {
        position: 'relative',
        top: '-25px',
        left: '25px',
        width: '40px'
    },
    title: {
        
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
