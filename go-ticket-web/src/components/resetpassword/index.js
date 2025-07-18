import { useState } from 'react';
import { useNavigate } from 'react-router';

import ContentBox from '../ui/contentbox';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import TextInput from '../ui/text'; 
import SubmitButton from '../ui/submitbutton';

export default function FormResetPassword() {

    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    return (
        <ContentBox style={{paddingTop: '150px'}}>
            <Title>Recuperação de Senha</Title>
            <SubTitle>Informe seu e-mail</SubTitle>
            <TextInput
                id="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <ContentBox style={{textAlign: 'center'}}>
                <SubmitButton value="Enviar" onClick={() => navigate('/')}/>
            </ContentBox>
        </ContentBox>
    )

}