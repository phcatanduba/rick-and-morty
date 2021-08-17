import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function LoadEpisode({ episode }) {
    return (
        <Item key={episode.id}>
            <Box>
                <Info>Nome: {episode.name}</Info>
                <Info>Episódio: {episode.episode}</Info>
                <Info>Qtd de Personagens: {episode.characters.length}</Info>
                <Info>Foi ao ar em: {episode.air_date}</Info>
                <Link
                    to={`/episode/:id`}
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: '5px',
                    }}
                >
                    clique aqui e saiba mais!
                </Link>
            </Box>
        </Item>
    );
}

const Info = styled.div`
    width: 80%;
    height: 40px;
    border-radius: 10px;
    color: white;
    margin: 10px auto;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 320px;
    height: 320px;
    border-radius: 20px;
    background-color: rgb(65, 65, 65);
`;

const Item = styled.div`
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
