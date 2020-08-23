import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { primeraMayus } from './../../helper'


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

`

const Resumen = ({ datos }) => {

    //Extraer de datos
    const { marca, year, plan } = datos

    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') return null

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraMayus(marca)}</li>
                <li>Año: {primeraMayus(year)}</li>
                <li>Plan: {primeraMayus(plan)}</li>
            </ul>
        </ContenedorResumen>
    );

}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;