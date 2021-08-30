import React from 'react';
import {BotonEstilizado} from './styles/BotonEstilizado'


// Si no se recibe el estado inicial del input, este se coloca como un string vacío.
// Si no se recibe la función para cambiar el estado inicial del input, se coloca por defecto como una función vacía.
function Boton({ digito, color, initialInputState='', setInputState=()=>undefined }){

    const comprobacion = (digito) => {
        
        switch(digito){
            case 'AC':
                // Si el digito que llega es AC (All-Clear), el input pasará a tener una cadena vacía
                setInputState('')
                break
            
            case 'C':
                // Si el digito es 'C' (Clear), el input pasará a tener la cadena actual -1 caracter
                setInputState(initialInputState.substring(0, initialInputState.length-1))
                break

            default:
                // Si el digito no es ninguno de los 2 anteriores, entonces es un número o un punto decimal, y se sumará a la cadena actual
                setInputState(initialInputState + digito)
                break
        }

    }



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