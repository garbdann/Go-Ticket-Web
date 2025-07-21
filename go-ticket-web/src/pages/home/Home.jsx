import { GridContentBox } from './style';

import NavigationBar from '../../components/navigationbar';
import ContentBox from '../../components/ui/contentbox';

export default function Home() {

    return (
        <GridContentBox>
            <ContentBox style={{ gridArea: 'topo' }}>
                <NavigationBar />
            </ContentBox>
            <ContentBox style={{ gridArea: 'conteudo' }}>
                
            </ContentBox>
        </GridContentBox>
    )

}