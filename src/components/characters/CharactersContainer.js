import axios from 'axios';

import { useEffect, useContext } from 'react';
import CharactersContext from '../../contexts/CharactersContext';

import Character from './Characters';

export default function CharactersContainer() {
    const { characters, setCharacters } = useContext(CharactersContext);

    useEffect(() => {
        const promise = axios.get('https://rickandmortyapi.com/api/character');
        promise.then((response) => {
            setCharacters(response.data.results);
        });
    }, [setCharacters]);

    return characters ? (
        <div style={{ marginTop: '50px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>
                Personagens:{' '}
            </p>
            <Character characters={characters} setCharacters={setCharacters} />
        </div>
    ) : (
        <p>Loading...</p>
    );
}
