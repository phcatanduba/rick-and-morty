import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import LoadCharacter from './LoadCharacter';
import axios from 'axios';

export default function Characters({ characters, setCharacters }) {
    function getMoreCharacters(index) {
        const page = index / 10;
        if (index % 20 === 0 && setCharacters) {
            const promise = axios.get(
                `https://rickandmortyapi.com/api/character/?page=${page}`
            );
            promise.then((response) => {
                setCharacters([...characters, ...response.data.results]);
            });
        }
    }

    return (
        <Container>
            <Carousel
                showThumbs={false}
                onChange={(index) => getMoreCharacters(index + 1)}
                renderIndicator={false}
            >
                {characters.map((character) => {
                    return (
                        <LoadCharacter
                            character={character}
                            key={character.id}
                        />
                    );
                })}
            </Carousel>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid white;
    padding-bottom: 20px;
`;
