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
import DateInput from '../ui/dateinput';
import TimeInput from '../ui/timeinput';
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
  const [time, setTime] = useState('');
  const [limit, setLimit] = useState('');

  const navigate = useNavigate();
  const { dialogVisible, dialogMessage, showDialog, closeDialog } = useDialog();
  const { user } = useUser();

  function verifyFields(event) {
    const { name, subject, category, description, location, date, time, limit, imageUrl } = event;

    if (
      name.trim() === '' ||
      subject.trim() === '' ||
      category.trim() === '' ||
      description.trim() === '' ||
      location.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
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

    const eventDate = new Date(`${date}T${time}`);
    const now = new Date();
    if (eventDate < now) {
      showDialog('A data e hora do evento não podem estar no passado.');
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
        if (img.width <= 800 && img.height <= 600) {
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
      date: date.trim(),
      time: time.trim(),
      description: description.trim(),
      location: location.trim(),
      limit: limit.trim(),
      imageUrl: imageDataUrl,
      organizer: user.username,
    };

    if (!verifyFields(newEvent)) return;
 
    addEvent(newEvent);
    showDialog(`Evento "${name}" criado com sucesso!`);

    setName('');
    setSubject('');
    setCategory('');
    setImageFile(null);
    setImageDataUrl(null);
    setDescription('');
    setLocation('');
    setDate('');
    setTime('');
    setLimit('');

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

          <ContentBox className="row">
            <ContentBox className="col-6">
              <Label className="mt-3">Data do Evento</Label>
              <DateInput
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
              />
            </ContentBox>
            <ContentBox className="col-6">
              <Label className="mt-3">Horário do Evento</Label>
              <TimeInput
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="form-control"
              />
            </ContentBox>
          </ContentBox>
        </ContentBox>

        <ContentBox className="col-md-6 col-12">
          <Label>Localização</Label>
          <TextInput value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" />

          <Label className="mt-3">Assunto</Label>
          <SelectInput
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Música', label: 'Música' },
              { value: 'Tecnologia', label: 'Tecnologia' },
              { value: 'Comida', label: 'Comida' },
              { value: 'Cinema', label: 'Cinema' },
              { value: 'Arte', label: 'Arte' },
              { value: 'Corrida', label: 'Corrida' },
              { value: 'Palestra', label: 'Palestra' },
              { value: 'Workshop', label: 'Workshop' },
              { value: 'Evento', label: 'Evento Geral' },
              { value: 'Outros', label: 'Outros' }
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
        <ImageInput id="imagem" name="imagem" onChange={handleImageChange} className="form-control" style={{ width: 'auto' }} />
      </ContentBox>

      <SubTitle className="mb-3">3. Descrição do Evento</SubTitle>

      <ContentBox className="row mb-3">
        <ContentBox className="col-md-6 col-12 mb-3 mb-md-0">
          <Label>Categoria</Label>
          <SelectInput
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={[
              { value: 'Festival', label: 'Festival' },
              { value: 'Conferência', label: 'Conferência' },
              { value: 'Exposição', label: 'Exposição' },
              { value: 'Entretenimento', label: 'Entretenimento' },
              { value: 'Benefeciente', label: 'Beneficente' },
              { value: 'Esporte', label: 'Esporte' },
              { value: 'Educação', label: 'Educação' },
              { value: 'Palestra', label: 'Palestra' },
              { value: 'Workshop', label: 'Workshop' },
              { value: 'Evento', label: 'Evento Geral' },
              { value: 'Outros', label: 'Outros' }
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