import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { addUser } from '../../utils/datatest';
import TextInput from '../input/text';
import PasswordInput from '../input/password';

import {
  Container, 
  Title,  
  Label,
  SendBox,
  Submit,
} from "./style";

export default function FormSignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function verifyFields(User) {
        if(username === '' || email === '' || password === ''){
            alert("I'm empty, fill me please ...");
        } else{
            addUser(User);
            alert(`User ${username} created!`);
            navigate('/');
        }
    }

    function signUp() {
        const newUser = {
        username,
        email,
        password,
        };

        verifyFields(newUser);
    }

return (
    <Container>
        <Title>Introduce, baby ❤💋</Title>

        <Label>Username</Label>
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
    
        <Label>Password</Label>
        <PasswordInput
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        
        <SendBox>
            <Submit value="Sign Up" onClick={signUp} />
        </SendBox>
    </Container>
  );
}
