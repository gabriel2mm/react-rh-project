import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { Container, ContainerInput, CenterForm } from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {firebaseImpl} from '../../Utils/firebase';


export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" , error : null});

    function handleChange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmitCredentials(e){
        e.preventDefault();
        try{
            const user = firebaseImpl
            .auth()
            .signInWithEmailAndPassword(form.email, form.password);

            user.then( r=> console.log("logado com sucesso!")).catch(e => console.log("Credencial invalida"));
        }catch(e){
            console.log(e);
        }
    }

    return (
        <>
            <Container>
                <CenterForm>
                    <Grid container direction="column" justify="space-around" alignItems="stretch">
                        <ContainerInput>
                            <TextField id="email" name="email" label="E-mail" type="email" value={form.email} onChange={handleChange} />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField id="password" name="password" label="password" type="password" value={form.password} onChange={handleChange} />
                        </ContainerInput>
                        <ContainerInput>
                            <Button variant="contained" color="primary" onClick={handleSubmitCredentials}>
                                Entrar
                        <ArrowForwardIosIcon />
                            </Button>
                        </ContainerInput>
                    </Grid>
                </CenterForm>
            </Container>
        </>
    );
}
