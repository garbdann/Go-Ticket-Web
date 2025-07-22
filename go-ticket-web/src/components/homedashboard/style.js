import styled from 'styled-components';
import ContentBox from '../../components/ui/contentbox';

export const GridContentBox = styled(ContentBox)`
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 600px 200px 1fr;
    grid-template-areas: 
        'carousel'
        'controls'
        'conteudo';
    overflow-x: hidden;
`;

export const CarouselContentBox = styled(ContentBox)`
    grid-area: carousel;
    min-height: 300px;
`;

export const FilterArea = styled(ContentBox)`
    grid-area: controls;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    min-height: 200px;
`;

export const CardArea = styled(ContentBox)`
    grid-area: conteudo;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`;