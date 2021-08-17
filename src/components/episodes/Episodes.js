import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import LoadEpisode from './LoadEpisode';
import axios from 'axios';

export default function Characters({ episodes, setEpisodes }) {
    function getMoreEpisodes(index) {
        const page = index / 10;
        if (index % 20 === 0) {
            const promise = axios.get(
                `https://rickandmortyapi.com/api/episode/?page=${page}`
            );
            promise.then((response) => {
                setEpisodes([...episodes, ...response.data.results]);
            });
        }
    }

    return (
        <Container>
            <Carousel
                showThumbs={false}
                onChange={(index) => getMoreEpisodes(index + 1)}
                renderIndicator={false}
            >
                {episodes.map((episode) => {
                    return <LoadEpisode episode={episode} key={episode.id} />;
                })}
            </Carousel>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 40px;
`;
