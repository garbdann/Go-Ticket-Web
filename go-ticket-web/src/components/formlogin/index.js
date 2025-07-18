import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authenticateUser } from '../../utils/datatest';

import ContentBox from '../ui/contentbox';
import FormBox from '../ui/formbox';
import Label from '../ui/label';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import SubmitButton from '../ui/submitbutton';
import TextInput from '../ui/text';
import PasswordInput from '../ui/password';

import {
    CustomContentBox,
    Link,
} from "./style";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function Authenticate(email, password) {
        if(!verifyFields(email, password)) {
            return;
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
            return false;
        }

        return true;
    }

return (
    <FormBox>
        <Title>Welcome to GoTicket</Title>
        <SubTitle>Sign in</SubTitle>

        <Label>E-mail</Label>
        <TextInput
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <CustomContentBox>
            <Label>Password</Label>
            <Link onClick={() => navigate('/resetPassword')} style={{marginTop: '10px'}}> Forgot Your Password? </Link>
        </CustomContentBox>
        <PasswordInput
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        
        <ContentBox style={{textAlign: 'center', width: '100%'}}>
            <SubmitButton value="Authenticate" onClick={() => Authenticate(email, password)} />
            <Link onClick={() => navigate('/signUp')}> Sign Up </Link>
        </ContentBox>
    </FormBox>
  );
}
