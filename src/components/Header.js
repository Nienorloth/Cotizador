import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

const ContenedorHeader = styled.header`
background-color: #26C6DA;
padding: 10px;
font-weight: bold;
color: #FFFFFF;
`

const TextoHeader = styled.h1`
font-size: 2rem;
margin: 0;
font-family: 'Slabo 27px', serif;
text-align: center;
`

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes = {
    titulo: propTypes.string.isRequired
}
export default Header;