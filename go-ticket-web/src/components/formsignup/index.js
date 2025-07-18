import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addUser } from '../../utils/datatest';

import FormBox from '../ui/formbox';
import ContentBox from '../ui/contentbox';
import Label from '../ui/label';
import Title from '../ui/title';

import TextInput from '../ui/text';
import PasswordInput from '../ui/password';
import SubmitButton from '../ui/submitbutton';

export default function FormSignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function verifyFields(User) {
        if(username === '' || email === '' || password === ''){
            alert("Please fill in all fields.");
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
    <FormBox>
        <Title>Join us</Title>

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
        
        <ContentBox style={{display: 'flex', justifyContent: 'center'}}>
            <SubmitButton value="Sign Up" onClick={signUp} />
        </ContentBox>
    </FormBox>
  );
}
