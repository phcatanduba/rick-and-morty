import Header from '../common/Header';
import Info from '../common/Info';
import Characters from '../characters/Characters';
import { findEpisode, getIdsAndCallGetCharacters } from './utilsEpisodes';

import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EpisodeById() {
    const [characters, setCharacters] = useState([]);
    const [episode, setEpisode] = useState({});
    const { id } = useParams();

    useEffect(() => {
        findEpisode(setEpisode, id);
    }, [id]);

    useEffect(() => {
        getIdsAndCallGetCharacters(episode, setCharacters);
    }, [episode]);

    return 'characters' in episode ? (
        <Container>
            <Header />
            <Box>
                <div>
                    <Info>Nome: {episode.name}</Info>
                    <Info>Episódio: {episode.episode}</Info>
                    <Info>Qtd de Personagens: {episode.characters.length}</Info>
                    <Info>Foi ao ar em: {episode.air_date}</Info>
                </div>
            </Box>
            <p>Personagens do episódio: </p>
            <Characters characters={characters} />
        </Container>
    ) : (
        <Container>Loading...</Container>
    );
}
const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #212121;
    p {
        margin: 10px;
        font-size: 25px;
        color: white;
    }
`;

const Box = styled.div`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        min-width: 80px;
        width: 10%;
        border-radius: 60px;
    }
    div {
        min-width: 120px;
        width: 40%;
    }
`;
