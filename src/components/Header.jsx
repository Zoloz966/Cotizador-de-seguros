import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import imagen1 from '../assets/3.png'
import imagen2 from '../assets/4.png'

const ContenedorHeader = styled.header`
    background-color: #7CC644;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    margin-top: 50px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    height: 60px;
    padding-inline: 80px;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
`

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <Img src={imagen1}/>
            <TextoHeader>{titulo}</TextoHeader>
            <Img src={imagen2}/>
        </ContenedorHeader>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;