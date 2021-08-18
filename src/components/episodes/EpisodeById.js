import Header from '../common/Header';
import styled from 'styled-components';

export default function EpisodeById() {
    return (
        <Container>
            <Header />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #212121;
`;
