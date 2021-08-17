import styled from 'styled-components';

import Header from './common/Header';
import CharactersContainer from './characters/CharactersContainer';
import EpisodesContainer from './episodes/EpisodesContainer';

export default function Home() {
    return (
        <Container>
            <Header />
            <CharactersContainer />
            <EpisodesContainer />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #212121;
`;
