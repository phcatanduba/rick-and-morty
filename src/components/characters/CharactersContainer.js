import axios from 'axios';

import { useEffect, useState } from 'react';

import Character from './Characters';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://rickandmortyapi.com/api/character');
        promise.then((response) => {
            setCharacters(response.data.results);
        });
    }, []);

    return characters ? (
        <>
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>
                Personagens:{' '}
            </p>
            <Character characters={characters} setCharacters={setCharacters} />
        </>
    ) : (
        <p>Loading...</p>
    );
}
