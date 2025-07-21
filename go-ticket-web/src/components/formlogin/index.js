import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateUser } from '../../utils/datatest';
import { useUser } from '../../context/UserContext';

import ContentBox from '../ui/contentbox';
import FormBox from '../ui/formbox';
import Label from '../ui/label';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import SubmitButton from '../ui/submitbutton';
import TextInput from '../ui/textinput';
import PasswordInput from '../ui/passwordinput';
import DialogBox from '../ui/dialogbox';

import { useDialog } from '../../hooks/useDialog';

import {
    CustomContentBox,
    Link,
} from "./style";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { dialogVisible, dialogMessage, showDialog, closeDialog } = useDialog();
    const { login } = useUser();

    function Authenticate() {
        if (!verifyFields()) {
            return;
        }

        const user = authenticateUser(email, password);

        if (user) {
            login(user);
            showDialog("Logado com sucesso!");
            setTimeout(() => {
                closeDialog();
                navigate('/home');
            }, 2000);
        } else {
            showDialog("Email ou senha inválida."); 
        }
    }

    function verifyFields() {
        if (email.trim() === '' || password.trim() === '') {
            showDialog("Por favor, preencha todos os campos.");
            return false;
        }
        return true;
    }

    return (
        <FormBox>
            <Title>Bem-vindo ao GoTicket</Title>
            <SubTitle>Entrar</SubTitle>

            <Label>E-mail</Label>
            <TextInput
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <CustomContentBox>
                <Label>Senha</Label>
                <Link onClick={() => navigate('/resetPassword')} style={{marginTop: '10px'}}> Esqueceu sua Senha? </Link>
            </CustomContentBox>
            <PasswordInput
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <ContentBox style={{textAlign: 'center', width: '100%'}}>
                <SubmitButton onClick={() => Authenticate()}>Entrar</SubmitButton>
                <Link onClick={() => navigate('/signUp')}> Sign Up </Link>
            </ContentBox>
            
            {dialogVisible && (
                <DialogBox
                    message={dialogMessage}
                    onClose={closeDialog}
                />
            )}
        </FormBox>
    );
}