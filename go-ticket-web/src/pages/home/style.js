import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100%;    
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
    grid-template-areas: 
        'topo'
        'conteudo';    
`;