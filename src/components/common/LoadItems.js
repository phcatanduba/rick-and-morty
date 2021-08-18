import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function LoadItems({ characters, episodes, input, show }) {
    return (
        <Container>
            {characters.map((item) => {
                return item.name.toLowerCase().includes(input) &&
                    input !== '' &&
                    show === true ? (
                    <Link to={`/character/${item.id}`} key={item.id}>
                        <Searchs>Personagem: {item.name}</Searchs>
                    </Link>
                ) : null;
            })}
            {episodes.map((item) => {
                return item.name.toLowerCase().includes(input) &&
                    input !== '' &&
                    show === true ? (
                    <Link to={`/episode/${item.id}`} key={item.id}>
                        <Searchs>Episódio: {item.name}</Searchs>
                    </Link>
                ) : null;
            })}
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
`;

const Searchs = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    height: 30px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
    }
`;
