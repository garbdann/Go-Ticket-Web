import { useState } from 'react';
import { useNavigate } from 'react-router';

import ContentBox from '../ui/contentbox';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import TextInput from '../ui/textinput'; 
import SubmitButton from '../ui/submitbutton';
import DialogBox from '../ui/dialogbox';

import { useDialog } from '../../hooks/useDialog';

export default function FormResetPassword() {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const { dialogVisible, dialogMessage, showDialog, closeDialog } = useDialog();

    const handleResetPassword = () => {
        if (email.trim() === '') {
            showDialog("Por favor, informe seu e-mail para recuperar a senha.");
            return;
        }
        showDialog(`Um link de recuperação foi enviado para ${email}.`);
        
        setTimeout(() => {
            closeDialog();
            navigate('/');
        }, 2000);
    };

    return (
        <ContentBox style={{paddingTop: '150px'}}>
            <Title>Recuperação de Senha</Title>
            <SubTitle>Informe seu E-mail </SubTitle>
            <TextInput
                id="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <ContentBox style={{textAlign: 'center'}}>
                <SubmitButton onClick={handleResetPassword}>Enviar</SubmitButton>
            </ContentBox>

            {dialogVisible && (
                <DialogBox
                    message={dialogMessage}
                    onClose={closeDialog}
                />
            )}
        </ContentBox>
    );
}