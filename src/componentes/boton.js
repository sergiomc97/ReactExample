import React from "react";
import '../estilos/boton.css'
function Boton({texto, esclick, manejarClick}){

    return(
        <button className={ esclick ? 'boton-click': 'boton-reiniciar' }
        onClick={manejarClick}>
            {texto}
        </button>
    );


}

export default Boton