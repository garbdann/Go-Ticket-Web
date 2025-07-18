import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addEvent } from '../../utils/datatest';

import ContentBox from '../ui/contentbox';
import FormBox from '../ui/formbox';
import Label from '../ui/label';
import Title from '../ui/title';

import SubmitButton from '../ui/submitbutton';
import TextInput from '../ui/text';
import DatePickerInput from '../ui/datepicker';
import ImageInput from '../ui/imagepicker';

export default function FormEvent() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [limit, setLimit] = useState('');
    const [remainingSpots, setRemainingSpots] = useState('');
    const [location, setLocation] = useState('');
    const [organizer, setOrganizer] = useState('');
    
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const navigate = useNavigate();

    function verifyFields(event) {
        if(name === '' || date === '' || description === '' || limit === '' || location === '' || organizer === ''){
            alert("Please fill in all fields.");
        } else {
            adjustFields(event);
            addEvent(event); // Se quiser enviar a imagem, precisa adaptar essa função
            alert(`Event ${name} created!`);
            navigate('/home');
        }
    }

    function adjustFields(event) {
        setDate(String(event.date));
        setLimit(parseInt(event.limit));
    }
    
    function handleSubmit() {
        const newEvent = {
            name,
            date,
            description,
            limit,
            remainingSpots,
            location,
            organizer,
            imageFile
        };

        verifyFields(newEvent);
    }

    // Função para pegar e mostrar preview da imagem
    function handleChange(e) {
        const file = e.target.files[0];
        if(file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    return (
        <FormBox style={{paddingTop: '100px'}}>
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
        
            <Label>Description</Label>
            <TextInput
                id="description" 
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            
            <Label>Limit</Label>
            <TextInput
                id="limit" 
                name="limit" 
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
            />
            
            <Label>Location</Label>
            <TextInput
                id="location" 
                name="location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            
            <Label>Organizer</Label>
            <TextInput
                id="organizer" 
                name="organizer" 
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
            />
            
            <ContentBox style={{textAlign: 'center', paddingTop: '20px'}}>
                <ImageInput id="image" name="image" onChange={handleChange} />
                {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '200px', marginTop: 10 }} />}
            </ContentBox>

            <ContentBox style={{textAlign: 'center'}}>
                <SubmitButton value="Sign Up" onClick={handleSubmit} />
            </ContentBox>
        </FormBox>
    );

    // Ajustar para colocar o ContentBox ao invés de SendBox
}
