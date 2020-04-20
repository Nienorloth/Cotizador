import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from './../helper';
import propTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1 rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
` 

const Resumen = ({datos}) => {

    //extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: propTypes.object.isRequired
}

export default Resumen;