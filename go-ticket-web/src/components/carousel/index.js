import Carousel from 'react-bootstrap/Carousel';
import { CarouselImage } from './style';

export default function CustomCarousel() {
  return (
    <Carousel controls={true} indicators={true}>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://via.placeholder.com/800x300/a0a0a0/ffffff?text=Slide+1"
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <h3>Primeiro Evento</h3>
          <p>Descrição breve do primeiro evento ou promoção.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://via.placeholder.com/800x300/b0b0b0/ffffff?text=Slide+2"
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>Segundo Evento</h3>
          <p>Mais detalhes sobre o segundo evento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://via.placeholder.com/800x300/c0c0c0/ffffff?text=Slide+3"
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <h3>Terceiro Evento</h3>
          <p>Confira as novidades do terceiro evento.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
