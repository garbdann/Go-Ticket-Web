import Carousel from 'react-bootstrap/Carousel';
import SubmitButton from '../ui/submitbutton';
import ImageBox from '../ui/imagebox';

import { getUpcomingEvents } from '../../utils/datatest';

export default function CustomCarousel({ onOpenDetails, formatDateForDisplay }) {
  const upcomingEvents = getUpcomingEvents();

  return (
    <Carousel controls={true} indicators={true}>
      {upcomingEvents.map((event) => (
        <Carousel.Item key={event.id}>
          <ImageBox
            className="d-block w-100"
            src={event.imageUrl || "https://via.placeholder.com/800x300/c0c0c0/ffffff?text=Evento"}
            alt={event.name}
            width="100%"
            height="600px"
          />
          <Carousel.Caption>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Data: {formatDateForDisplay(event.date)} às {event.time}</p>
            <SubmitButton 
                onClick={() => onOpenDetails(event)} 
                style={{ marginTop: '10px' }}
            >
                Ver Detalhes
            </SubmitButton>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}