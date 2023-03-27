import React from "react";
import '../estilos/contador.css'

function Contador({ numclick }){

    return(
        <div className="contador">
            {numclick}
        </div>
    );
}

export default Contador;