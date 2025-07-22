import ContentBox from '../ui/contentbox';
import SubmitButton from '../ui/submitbutton';

import { CardStyles, ImageStyles } from './style';

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
        <SubmitButton className="btn btn-dark mt-auto" onClick={() => onDetailsClick(event)}>Ver detalhes</SubmitButton>
      </ContentBox>
    </CardStyles>
  );
}