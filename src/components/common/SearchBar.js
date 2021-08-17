import { useState } from 'react';
import styled from 'styled-components';

export default function SearchBar() {
    const [input, setInput] = useState('');
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Input
                placeholder={'Digite o nome do personagem ou do episódio'}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            ></Input>
        </div>
    );
}

const Input = styled.input`
    width: 80%;
    height: 30px;
    margin: 20px auto;
    border-radius: 15px;
    font-size: 20px;
    &::placeholder {
        font-size: 20px;
        padding-left: 10px;
    }
`;
