import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import CharactersContext from '../../contexts/CharactersContext';
import EpisodesContext from '../../contexts/EpisodesContext';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);
    const [charactersAndEpisodes, setCharactersAndEpisodes] = useState([]);

    const { characters } = useContext(CharactersContext);
    const { episodes } = useContext(EpisodesContext);

    useEffect(() => {
        setCharactersAndEpisodes([...characters, ...episodes]);
    }, [characters, episodes]);

    return (
        <Area
            onClick={() => {
                setShow(false);
            }}
        >
            <Input
                placeholder={'Digite o nome do personagem ou do episódio'}
                onChange={(e) => {
                    setInput(e.target.value.toLowerCase());
                    setShow(true);
                }}
            ></Input>
            {charactersAndEpisodes.map((item) => {
                return item.name.toLowerCase().includes(input) &&
                    input !== '' &&
                    show === true ? (
                    <Searchs key={item.id}>{item.name}</Searchs>
                ) : null;
            })}
        </Area>
    );
}

const Area = styled.span`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

const Input = styled.input`
    width: 80%;
    height: 30px;
    margin: 0px auto;
    margin-top: 20px;
    border-radius: 15px;
    font-size: 20px;
    &::placeholder {
        font-size: 20px;
        padding-left: 10px;
    }
`;

const Searchs = styled.div`
    top: 0;
    left: 0;
    width: 80%;
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
