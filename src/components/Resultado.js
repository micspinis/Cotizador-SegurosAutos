import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// Libreria para crear animacion de transicion.
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00848F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ cotizacion }) => {


    return (
        (cotizacion === 0) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
            :(
                <ResultadoCotizacion>
                    <TransitionGroup
                        // Indicamos el tipo de elemento al que se va a aplicar la transicion
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            // Notar que es classNames no className 
                            classNames="resultado"
                            key={cotizacion}
                            // Tiempo de animacion
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextoCotizacion>El total a pagar es: $ <span> {cotizacion} </span></TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;