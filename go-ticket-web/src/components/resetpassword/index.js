import { useState } from 'react';
import { useNavigate } from 'react-router';

import ContentBox from '../ui/contentbox';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import TextInput from '../ui/text'; 
import SubmitButton from '../ui/submitbutton';

import {
    SendBox
} from "./style"

export default function FormResetPassword() {

    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    return (
        <ContentBox>
            <Title>Recuperação de Senha</Title>
            <SubTitle>Informe seu e-mail</SubTitle>
            <TextInput
                id="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <SendBox>
                <SubmitButton value="Enviar" onClick={() => navigate('/')}/>
            </SendBox>
        </ContentBox>
    )

}