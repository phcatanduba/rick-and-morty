import Header from '../common/Header';
import Info from '../common/Info';
import Characters from '../characters/Characters';

import styled from 'styled-components';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EpisodeById({ episodes }) {
    const [characters, setCharacters] = useState([]);
    const [episode, setEpisode] = useState({});
    const { id } = useParams();

    function findEpisode() {
        const result = episodes.find((episode) => {
            return episode.id === +id;
        });
        setEpisode(result);
    }

    function getCharacters(ids) {
        if (ids) {
            const promise = axios.get(
                `https://rickandmortyapi.com/api/character/${ids}`
            );
            promise.then((response) => {
                setCharacters(response.data);
            });
        }
    }

    useEffect(() => {
        findEpisode();

        let ids = '';
        episode.characters?.forEach((url) => {
            const index = url.indexOf('character/');
            ids += url.substring(index + 10, url.length) + ',';
        });
        getCharacters(ids);
    }, [episode, id]);

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
        <p>Loading...</p>
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
