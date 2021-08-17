import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
