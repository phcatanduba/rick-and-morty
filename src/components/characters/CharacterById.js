import Header from '../common/Header';
import Info from '../common/Info';
import Episodes from '../episodes/Episodes';

import styled from 'styled-components';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CharacterById({ characters }) {
    const [character, setCharacter] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();

    function findCharacter() {
        const result = characters.find((character) => {
            return character.id === +id;
        });
        setCharacter(result);
    }

    function getEpisodes(ids) {
        if (ids) {
            const promise = axios.get(
                `https://rickandmortyapi.com/api/episode/${ids}`
            );
            promise.then((response) => {
                setEpisodes(response.data);
            });
        }
    }

    useEffect(() => {
        findCharacter();

        let ids = '';
        character.episode?.forEach((url) => {
            const index = url.indexOf('episode/');
            ids += url.substring(index + 8, url.length) + ',';
        });
        getEpisodes(ids);
    }, [character]);

    return 'image' in character ? (
        <Container>
            <Header />
            <Box>
                <img src={character.image} alt={character.name + 'avatar'} />
                <div>
                    <Info>Nome: {character.name}</Info>
                    <Info>Local de origem: {character.origin.name}</Info>
                </div>
            </Box>
            <Episodes episodes={episodes} />
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
