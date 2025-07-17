import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import TextInput from '../../components/input/text'; 


import {
    FormBox,
    Title,
    Info,
    Container,
    Submit,

} from "./style"

export default function ResetPassword() {

    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Title>Recuperação de Senha</Title>
                <Info>Informe seu e-mail de autenticação e enviaremos um link para que possa recuperar sua senha!</Info>
                <Container>
                    <TextInput
                        id="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Submit value="Enviar" onClick={() => navigate('/')}/>
                </Container>
            </Container>
        </>
    )
}