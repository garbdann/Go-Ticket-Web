import SubmitButton from '../submitbutton';
import Title from '../title';
import Label from '../label';

import {
  StyledEventDetailsDialogBox,
  StyledEventDetailsContent,
} from './style';

export default function EventDetailsDialogBox({ eventDetails, onClose }) {

  return (
    <StyledEventDetailsDialogBox onClick={onClose}>
      <StyledEventDetailsContent onClick={e => e.stopPropagation()}>
        <Title>Detalhes do Evento</Title>

        <Label>Nome: {eventDetails.name}</Label>
        <Label>Data: {new Date(eventDetails.date).toLocaleDateString('pt-BR')}</Label>
        <Label>Hora: {eventDetails.time}</Label>
        <Label>Local: {eventDetails.location}</Label>
        <Label>Organizador: {eventDetails.organizer}</Label>
        <Label>Assunto: {eventDetails.subject}</Label>
        <Label>Categoria: {eventDetails.category}</Label>
        <Label>Limite de Vagas: {eventDetails.limit}</Label>
        <Label>Descrição: {eventDetails.description}</Label>

        <SubmitButton onClick={onClose} style={{ marginTop: '25px', alignSelf: 'center' }}>
          Fechar Detalhes
        </SubmitButton>
      </StyledEventDetailsContent>
    </StyledEventDetailsDialogBox>
  );
}