import React from 'react';
import { Container } from './style';
import NavigationBar from '../../components/navigationbar';


export default function Home() {

    return (
        <Container>
            <div style={{ gridArea: 'topo' }}>
                <NavigationBar />
            </div>
            <div style={{ gridArea: 'conteudo' }}>
                
            </div>
        </Container>
    )

}