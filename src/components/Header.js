import React from 'react';
import styled from '@emotion/styled'; //Libreria emotion, se usa para el css en style components VER DOCUMENTACION

// styled componentes: Despues de styled.<elemento html> y en un template string escribimos el css
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center; 
`;

const Header = ({ titulo }) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{ titulo }</TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;