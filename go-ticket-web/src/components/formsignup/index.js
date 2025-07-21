import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addUser } from '../../utils/datatest';

import FormBox from '../ui/formbox';
import ContentBox from '../ui/contentbox';
import Label from '../ui/label';
import Title from '../ui/title';

import TextInput from '../ui/textinput';
import PasswordInput from '../ui/passwordinput';
import SubmitButton from '../ui/submitbutton';
import DialogBox from '../ui/dialogbox'; 

import { useDialog } from '../../hooks/useDialog';

export default function FormSignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { dialogVisible, dialogMessage, showDialog, closeDialog } = useDialog();

    function verifyFields(User) {
        if(username.trim() === '' || email.trim() === '' || password.trim() === ''){
            showDialog("Por favor, preencha todos os campos.");
            return false;
        } else{
            return true;
        }
    }

    function signUp() {
        const newUser = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
        };

        if (!verifyFields(newUser)) {
            return;
        }

        addUser(newUser);
        showDialog(`Usuário ${username} criado!`);
        
        setTimeout(() => {
            closeDialog();
            navigate('/');
        }, 1500);
    }

    return (
        <FormBox>
            <Title>Junte-se à Nós</Title>

            <Label>Nome de Usuário</Label>
            <TextInput
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <Label>E-mail</Label>
            <TextInput
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        
            <Label>Senha</Label>
            <PasswordInput
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <ContentBox style={{display: 'flex', justifyContent: 'center'}}>
                <SubmitButton onClick={signUp}>Cadastrar</SubmitButton>
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