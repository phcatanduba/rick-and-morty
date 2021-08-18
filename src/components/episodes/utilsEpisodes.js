import axios from 'axios';

export function findEpisode(setEpisode, id) {
    const promise = axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    promise.then((response) => {
        setEpisode(response.data);
    });
}

export function getCharacters(ids, setCharacters) {
    if (ids) {
        const promise = axios.get(
            `https://rickandmortyapi.com/api/character/${ids}`
        );
        promise.then((response) => {
            setCharacters(response.data);
        });
    }
}

export function getIdsAndCallGetCharacters(episode, setCharacters) {
    let ids = '';
    episode.characters?.forEach((url) => {
        const index = url.indexOf('character/');
        ids += url.substring(index + 10, url.length) + ',';
    });
    getCharacters(ids, setCharacters);
}
