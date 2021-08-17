import styled from 'styled-components';
import SearchBar from './SearchBar';

export default function Header() {
    return (
        <div>
            <Title>Rick and Morty</Title>
            <SearchBar />
        </div>
    );
}

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    font-family: 'Loved by the King', cursive;
    color: rgb(43, 226, 43);
    width: 100%;
    text-align: center;
    background: rgb(20, 20, 20);
    font-size: 42px;
    margin-bottom: 10px;
`;
