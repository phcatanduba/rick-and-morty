import styled from 'styled-components';

export default function LoadItems({ characters, episodes, input, show }) {
    return (
        <Container>
            {characters.map((item) => {
                return item.name.toLowerCase().includes(input) &&
                    input !== '' &&
                    show === true ? (
                    <Searchs key={item.id}>Personagem: {item.name}</Searchs>
                ) : null;
            })}
            {episodes.map((item) => {
                return item.name.toLowerCase().includes(input) &&
                    input !== '' &&
                    show === true ? (
                    <Searchs key={item.id}>Episódio: {item.name}</Searchs>
                ) : null;
            })}
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    max-height: 400px;
    overflow-y: auto;
`;

const Searchs = styled.div`
    top: 0;
    left: 0;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.7);
    height: 30px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
    }
`;
