import ContentBox from '../ui/contentbox';
import SubmitButton from '../ui/submitbutton';

import { CardStyles, ImageStyles } from './style';

const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    }
    return dateString;
};

export default function EventCard({ event, onDetailsClick }) {
    return (
        <CardStyles className="card h-100">
            <ImageStyles
                src={event.imageUrl || "https://via.placeholder.com/350x200/cccccc/ffffff?text=Sem+Imagem"}
                className="card-img-top"
                alt={event.name}
            />
            <ContentBox className="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 className="card-title text-center text-truncate w-100 mb-2">{event.name}</h5>
                <p className="card-text">Data: {formatDateForDisplay(event.date)} às {event.time}</p>
                <SubmitButton className="btn btn-dark mt-auto" onClick={() => onDetailsClick(event)}>Ver detalhes</SubmitButton>
            </ContentBox>
        </CardStyles>
    );
}