import React, { useState } from 'react';
import styled from '@emotion/styled'

import Header from './general_components/Header'
import Formulario from './general_components/Formulario'
import Resumen from './general_components/Resumen'
import Resultado from './general_components/Resultado'
import Spinner from './Spinner'


import './App.css';


const Contenedor = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const ContenedorForm = styled.div`
background: #FFF;
padding: 3rem;
`


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  const [cargando, guardarCargando] = useState(false)

  //Extraer datos
  const { cotizacion, datos } = resumen
  console.log(cotizacion)

  return (

    <Contenedor>
      <Header
        titulo="cotizador de seguros" />
      <ContenedorForm>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando} />
        {cargando ? <Spinner /> : null}
        <Resumen
          datos={datos} />
        {!cargando ?
          <Resultado
            cotizacion={cotizacion} />
          : null}
      </ContenedorForm>


    </Contenedor>
  );
}

export default App;
