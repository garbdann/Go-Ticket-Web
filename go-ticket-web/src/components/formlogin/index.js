import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateUser } from '../../utils/datatest';
import TextInput from '../input/text';
import PasswordInput from '../input/password';

import { 
    Container, 
    Title, 
    SubTitle,
    Label,
    SendBox,
    Submit,
    LinkSignUp,
} from "./style";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function Authenticate(email, password) {
        const user = authenticateUser(email, password);

        if (user) {
            navigate('/home', { state: { user } });
        } else {
            alert('Invalid email or password.');
        }
  }

return (
    <Container>
        <Title>Welcome to GoTicket, honey!</Title>
        <SubTitle>Tell me your secrets...</SubTitle>

        <Label>E-mail</Label>
        <TextInput
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    
        <Label>Password</Label>
        <PasswordInput
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Submit value="Forgot Your Password?" onClick={() => navigate('/resetPassword')} />
        
        <SendBox>
            <Submit value="Authenticate" onClick={() => Authenticate(email, password)} />
            <LinkSignUp onClick={() => navigate('/signUp')}> Sign Up </LinkSignUp>
        </SendBox>
    </Container>
  );
}
