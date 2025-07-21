import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addEvent } from '../../utils/datatest';
import { useDialog } from '../../hooks/useDialog';
import { useUser } from '../../context/UserContext'; 

import ContentBox from '../ui/contentbox';
import ImageBox from '../ui/imagebox';
import Label from '../ui/label';
import Title from '../ui/title';
import SubTitle from '../ui/subtitle';

import SubmitButton from '../ui/submitbutton';
import TextInput from '../ui/textinput';
import DatePickerInput from '../ui/datepicker';
import TextArea from '../ui/textarea';
import ImageInput from '../ui/imageinput';
import SelectInput from '../ui/selectinput'; 
import DialogBox from '../ui/dialogbox';

export default function FormEvent() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [limit, setLimit] = useState('');

  const navigate = useNavigate();
  const { dialogVisible, dialogMessage, showDialog, closeDialog } = useDialog();
  const { user } = useUser(); 

  function verifyFields(event) {
    const { name, subject, category, description, location, date, limit, imageUrl } = event;

    if (
      name.trim() === '' ||
      subject.trim() === '' ||
      category.trim() === '' ||
      description.trim() === '' ||
      location.trim() === '' ||
      date.trim() === '' ||
      limit.trim() === '' ||
      !imageUrl
    ) {
      showDialog('Por favor, preencha todos os campos e selecione uma imagem.');
      return false;
    }

    if (isNaN(Number(limit)) || Number(limit) <= 0) {
      showDialog('O limite de pessoas deve ser um número positivo.');
      return false;
    }

    const eventDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (eventDate < today) {
      showDialog('A data do evento não pode ser no passado.');
      return false;
    }

    return true;
  }

  function handleImageChange(file) {
    if (!file) {
      setImageFile(null);
      setImageDataUrl(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        if (img.width === 800 && img.height === 600) {
          setImageFile(file);
          setImageDataUrl(e.target.result);
        } else {
          showDialog('A imagem deve ter exatamente 800x600 pixels.');
          setImageFile(null);
          setImageDataUrl(null);
        }
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit() {
    if (!user) {
      showDialog('Você precisa estar logado para criar um evento.');
      return;
    }

    const newEvent = {
      name: name.trim(),
      subject: subject.trim(),
      category: category.trim(),
      date: String(date),
      description: description.trim(),
      location: location.trim(),
      limit: limit.trim(),
      imageUrl: imageDataUrl,
      organizer: user.username,
    };

    if (!verifyFields(newEvent)) return;

    addEvent(newEvent);
    showDialog(`Evento "${name}" criado com sucesso!`);

    setTimeout(() => {
      closeDialog();
      navigate('/home');
    }, 2000);
  }

  return (
    <ContentBox className="container mt-4 p-4"> 
      <Title>Cadastrar um Novo Evento</Title>
      <SubTitle className="mb-3">1. Informações Básicas</SubTitle>

      <ContentBox className="row mb-4">
        <ContentBox className="col-md-6 col-12 mb-3 mb-md-0">
          <Label>Nome do Evento</Label>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

          <Label className="mt-3">Data do Evento</Label>
          <DatePickerInput value={date} onChange={(e) => setDate(e.target.value)} className="form-control" />    
        </ContentBox>
        <ContentBox className="col-md-6 col-12">
          <Label>Localização</Label>
          <TextInput value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" />

          <Label className="mt-3">Assunto</Label>
          <SelectInput
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: '', label: 'Selecione um Assunto' },
              { value: 'musica', label: 'Música' },
              { value: 'tecnologia', label: 'Tecnologia' },
              { value: 'comida', label: 'Comida' },
              { value: 'cinema', label: 'Cinema' },
              { value: 'arte', label: 'Arte' },
              { value: 'corrida', label: 'Corrida' },
              { value: 'palestra', label: 'Palestra' },
              { value: 'workshop', label: 'Workshop' },
              { value: 'evento', label: 'Evento Geral' },
            ]}
            className="form-select"
          />
        </ContentBox>
      </ContentBox>

      <SubTitle className="mb-3">2. Imagem do Evento</SubTitle>
      <Label>Envie Imagens de Banners (800px X 600px)</Label>
      <ContentBox className="d-flex justify-content-center mb-3"> 
        {imageDataUrl ? (
          <ImageBox src={imageDataUrl} alt="Prévia da imagem" className="img-fluid" style={{ maxWidth: '800px', height: 'auto', borderRadius: '10px' }} />
        ) : (
          <ContentBox
            style={{
              width: '800px',
              height: '600px',
              background: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              borderRadius: '10px',
              maxWidth: '100%' 
            }}
          >
            Imagem do Evento
          </ContentBox>
        )}
      </ContentBox>
      <ContentBox className="d-flex justify-content-center mb-4"> 
        <ImageInput id="imagem" name="imagem" onChange={handleImageChange} className="form-control" style={{ width: 'auto' }}/>
      </ContentBox>

      <SubTitle className="mb-3">3. Descrição do Evento</SubTitle>

      <ContentBox className="row mb-3">
        <ContentBox className="col-md-6 col-12 mb-3 mb-md-0">
          <Label>Categoria</Label>
          <SelectInput
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={[
              { value: '', label: 'Selecione uma Categoria' },
              { value: 'festival', label: 'Festival' },
              { value: 'conferencia', label: 'Conferência' },
              { value: 'exposicao', label: 'Exposição' },
              { value: 'entretenimento', label: 'Entretenimento' },
              { value: 'beneficente', label: 'Beneficente' },
              { value: 'esporte', label: 'Esporte' },
              { value: 'educacao', label: 'Educação' },
              { value: 'palestra', label: 'Palestra' },
              { value: 'workshop', label: 'Workshop' },
              { value: 'evento', label: 'Evento Geral' },
            ]}
            className="form-select"
          />
        </ContentBox>
        <ContentBox className="col-md-6 col-12">
          <Label>Limite de Participantes</Label>
          <TextInput value={limit} onChange={(e) => setLimit(e.target.value)} className="form-control" type="number" />
        </ContentBox>
      </ContentBox>

      <Label>Descrição</Label>
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={5}
        placeholder="Descreva o evento..."
        className="form-control mb-4"
      />

      <ContentBox className="text-center my-4">
        <SubmitButton onClick={handleSubmit}>Criar Evento</SubmitButton>
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