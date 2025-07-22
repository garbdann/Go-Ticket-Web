// Não se usa Container neste por causa do display da página. Contaniner é para uma página onde o conteúdo é centralizado,
// enquanto essa página usa a tela inteira para exibir conteúdo, além de usar o CSS grid.

import NavigationBar from '../../components/navigationbar';
import CustomCarousel from '../../components/carousel';

import { 
    GridContentBox, 
    CarouselContentBox, 
    FilterArea, 
    CardArea 
} from './style';

export default function Home() {
    return (
        <>
            <NavigationBar />
            
            <GridContentBox>
                <CarouselContentBox>
                    <CustomCarousel />
                </CarouselContentBox>

                <FilterArea>
                    <button>Botão 1</button>
                    <button>Botão 2</button>
                    <input type="date" />
                </FilterArea>

                <CardArea>
                    <p>Resto da página como conteúdo</p>
                    <div style={{ height: '700px', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed grey', margin: '20px' }}>
                        <p>Conteúdo adicional para rolar e ver a sidebar por cima.</p>
                    </div>
                </CardArea>
            </GridContentBox>
        </>
    );
}