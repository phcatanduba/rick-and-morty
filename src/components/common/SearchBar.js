import { useContext, useState } from 'react';
import styled from 'styled-components';

import CharactersContext from '../../contexts/CharactersContext';
import EpisodesContext from '../../contexts/EpisodesContext';
import LoadItems from './LoadItems';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);

    const { characters } = useContext(CharactersContext);
    const { episodes } = useContext(EpisodesContext);

    return (
        <Container
            onClick={() => {
                setInput('');
                setShow(false);
            }}
        >
            <Input
                placeholder={'Digite o nome do personagem ou do episódio'}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value.toLowerCase());
                    setShow(true);
                }}
            ></Input>
            <Area style={show === false ? { display: 'none' } : null}>
                <LoadItems
                    characters={characters}
                    episodes={episodes}
                    show={show}
                    input={input}
                />
            </Area>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
`;

const Area = styled.span`
    width: 100%;
    height: 100%;
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
    padding-left: 10px;
`;
