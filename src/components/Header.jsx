import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #7CC644;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    margin-top: 50px;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({Titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{Titulo}</TextoHeader>
        </ContenedorHeader>
    );
};

export default Header;