import React, { Fragment } from 'react';

const Resumen = ({ datos }) => {

    // Extraer de datas
    const { marca, year, plan } = datos;

    if (marca==='' || year==='' || plan==='') return null;
        
    

    return ( 
        <Fragment>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del auto: </li>
            </ul>
        </Fragment>
        
     );
}
 
export default Resumen;