import React from 'react';
import {BotonEstilizado} from './styles/BotonEstilizado'


function Boton({ digito, color, setInputState=() => undefined }){

    const comprobacion = (digito) => digito === "AC" || digito === "C" ? setInputState('') : setInputState(digito);

    // Return y render
    return(
        <BotonEstilizado
            onClick={() => comprobacion(digito)}
            digito={digito}
            color={color}
        >{digito}</BotonEstilizado>
    )

}


// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones de nombrado
export {Boton}