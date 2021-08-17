import axios from 'axios';

import { useEffect, useContext } from 'react';
import EpisodesContext from '../../contexts/EpisodesContext';

import Episodes from './Episodes';

export default function Characters() {
    const { episodes, setEpisodes } = useContext(EpisodesContext);

    useEffect(() => {
        const promise = axios.get('https://rickandmortyapi.com/api/episode');
        promise.then((response) => {
            setEpisodes(response.data.results);
        });
    }, [setEpisodes]);

    return episodes ? (
        <div style={{ marginTop: '30px', paddingBottom: '50px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>
                Episódios:{' '}
            </p>
            <Episodes episodes={episodes} setEpisodes={setEpisodes} />
        </div>
    ) : (
        <p>Loading...</p>
    );
}
