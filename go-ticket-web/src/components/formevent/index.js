import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import TextInput from '../input/text';
import DatePickerInput from '../input/datepicker';

import { 
  Container, 
  Title,  
  Label,
  SendBox,
  Submit,
} from "./style";

export default function FormEvent() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [limit, setLimit] = useState('');
    const [remainingSpots, setRemainingSpots] = useState('');
    const [location, setLocation] = useState('');
    const [organizer, setOrganizer] = useState('');
    const navigate = useNavigate();

    function verifyFields(User) {
        if(name === '' || date === '' || description === '' || limit === '' || remainingSpots === '' || location === '' || organizer === ''){
            alert("I'm empty, fill me please ...");
        } else{
            addEvent(event);
            alert(`Event ${name} created!`);
            navigate('/home');
        }
    }

    function Submit() {
        const newEvent = {
        name,
        date,
        description,
        limit,
        remainingSpots,
        location,
        organizer
        };

        verifyFields(newEvent);
    }

return (
    <Container>
        <Title>Introduce, baby ❤💋</Title>

        <Label>Name</Label>
        <TextInput
            id="name" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <Label>Date</Label>
        <DatePickerInput 
            id="date" 
            name="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
    
        <Label>Password</Label>
        
        <SendBox>
            <Submit value="Sign Up" onClick={Submit} />
        </SendBox>
    </Container>
  );
}
