import Header from '../common/Header';
import Info from '../common/Info';
import Episodes from '../episodes/Episodes';
import { findCharacter, getIdsAndCallGetEpisodes } from './utilsCharacters';

import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CharacterById() {
    const [character, setCharacter] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        findCharacter(id, setCharacter);
    }, [id]);

    useEffect(() => {
        getIdsAndCallGetEpisodes(character, setEpisodes);
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
            <p>Episódios do personagem: </p>
            <Episodes episodes={episodes} />
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
