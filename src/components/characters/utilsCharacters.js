import axios from 'axios';

export function findCharacter(id, setCharacter) {
    const promise = axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    promise.then((response) => {
        setCharacter(response.data);
    });
}

export function getEpisodes(ids, setEpisodes) {
    if (ids) {
        const promise = axios.get(
            `https://rickandmortyapi.com/api/episode/${ids}`
        );
        promise.then((response) => {
            setEpisodes(response.data);
        });
    }
}

export function getIdsAndCallGetEpisodes(character, setEpisodes) {
    let ids = '';
    character.episode?.forEach((url) => {
        const index = url.indexOf('episode/');
        ids += url.substring(index + 8, url.length) + ',';
    });
    getEpisodes(ids, setEpisodes);
}
