import styled from 'styled-components';
import ContentBox from '../../components/ui/contentbox';

export const GridContentBox = styled(ContentBox)`
    display: grid;
    width: 100%;    
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 200px 1fr;
    grid-template-areas: 
        'carousel'
        'controls'
        'conteudo';
`;

export const CarouselContentBox = styled(ContentBox)`
    grid-area: carousel;
    background: #e0e0e0;
    min-height: 300px;
`;

export const FilterArea = styled(ContentBox)`
    grid-area: controls;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #d0d0d0;
    min-height: 200px;
`;

export const CardArea = styled(ContentBox)`
    grid-area: conteudo;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;