import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Info from '../common/Info';

export default function LoadCharacter({ character }) {
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
                    to={`/character/${character.id}`}
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
}

const Box = styled.div`
    width: 320px;
    height: 320px;
    border-radius: 20px;
    background-color: rgb(65, 65, 65);
`;

const Item = styled.div`
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
