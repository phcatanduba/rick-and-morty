import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Character({ characters }) {
    return (
        <Container>
            <Carousel>
                {characters.map((character) => {
                    return (
                        <Item key={character.id}>
                            <Box>
                                <Avatar>
                                    <img
                                        src={character.image}
                                        alt={`${character.name} avatar`}
                                    />
                                </Avatar>
                                <Info>Nome: {character.name}</Info>
                                <Info>Origem: {character.origin.name}</Info>
                                <Link
                                    to={`/character/:id`}
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: '5px',
                                    }}
                                >
                                    clique aqui e saiba mais!
                                </Link>
                            </Box>
                        </Item>
                    );
                })}
            </Carousel>
        </Container>
    );
}

const Info = styled.div`
    width: 80%;
    height: 40px;
    border-radius: 10px;
    color: white;
    margin: 10px auto;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 320px;
    height: 320px;
    border-radius: 20px;
    background-color: rgb(65, 65, 65);
`;

const Item = styled.li`
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Avatar = styled.div`
    width: 120px;
    height: 120px;
    margin: 10px auto;
    img {
        height: 120px;
        border-radius: 50px;
    }
`;

const Container = styled.div`
    width: 100%;
    margin-top: 40px;
    border-bottom: 1px solid white;
`;
