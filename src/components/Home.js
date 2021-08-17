import styled from 'styled-components';
import Header from './common/Header';

export default function Home() {
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
