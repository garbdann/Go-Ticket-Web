import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateUser } from '../../utils/datatest';

import ContentBox from '../ui/contentbox';
import Label from '../ui/label';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import SubmitButton from '../ui/submitbutton';
import TextInput from '../ui/text';
import PasswordInput from '../ui/password';

import {
    CustomContentBox,
    SendBox,
    Link,
} from "./style";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function Authenticate(email, password) {
        if(verifyFields(email, password)) {
            
        }
        
        const user = authenticateUser(email, password);

        if(user) {
            alert("Logged in successfully!");
            navigate('/home');
        } else {
            alert("Invalid email or password.");
        }
    }

    function verifyFields(email, password) {
        if (email.trim() === '' || password.trim() === '') {
            alert("Please fill in all fields.");
        } else {
            return;
        }
    }

return (
    <CustomContentBox>
        <Title>Welcome to GoTicket</Title>
        <SubTitle>Sign in</SubTitle>

        <Label>E-mail</Label>
        <TextInput
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <ContentBox style={{display: 'flex', justifyContent: 'row', justifyContent: 'space-between'}}>
            <Label>Password</Label>
            <Link onClick={() => navigate('/resetPassword')} style={{marginTop: '10px'}}> Forgot Your Password? </Link>
        </ContentBox>
        <PasswordInput
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        
        <SendBox>
            <SubmitButton value="Authenticate" onClick={() => Authenticate(email, password)} />
            <Link onClick={() => navigate('/signUp')}> Sign Up </Link>
        </SendBox>
    </CustomContentBox>
  );
}
