import '../estilos/clicks.css';
import Boton from '../componentes/boton';
import foto from '../imagenes/2.png'
import Contador from '../componentes/contador';
import { useState } from 'react';
import React from 'react';

function Clicks() {
  const [numclick, setNumClic]= useState(0);

  const contador = () => {
    setNumClic(numclick +1);
    
  }
  const reiniciar = () => {
    setNumClic(0);
  }
  return (
    <div className='clicks'>
      <div className='contenedor-imagen'>
        <img
          src={foto}
        />
      </div>
      
      <div className='principal'>
        <Contador numclick={numclick} className='numero'/>
        <Boton 
        texto='click'
        esclick={true}
        manejarClick={contador}
        className='clic' />

        <Boton 
        texto='reinciar'
        esclick={false}
        manejarClick={reiniciar}
        className='reiniciar'/>
      </div>
    </div>
  );
}

export default Clicks;
