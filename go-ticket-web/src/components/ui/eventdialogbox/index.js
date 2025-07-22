import SubmitButton from '../submitbutton';
import Title from '../title';
import Label from '../label';

import {
    StyledEventDetailsDialogBox,
    StyledEventDetailsContent,
} from './style';

const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    }
    return dateString;
};

export default function EventDetailsDialogBox({ eventDetails, onClose }) {

    return (
        <StyledEventDetailsDialogBox onClick={onClose}>
            <StyledEventDetailsContent onClick={e => e.stopPropagation()}>
                <Title>Detalhes do Evento</Title>

                <Label>Nome: {eventDetails.name}</Label>
                <Label>Data: {formatDateForDisplay(eventDetails.date)}</Label>
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