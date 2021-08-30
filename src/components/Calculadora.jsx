import React from 'react';
import {Botonera} from './Botonera';
import {DivCentrado, InputStyled} from './styles/Calculadora';


function Calculadora(){

    const [initialState, setInputState] = React.useState('');

    // Return y render
    return(
        <DivCentrado>
            <InputStyled type="text" value={initialState}/>
            <Botonera 
                initialInputState={initialState}
                setInputState={setInputState}/>
        </DivCentrado>
    )
}


// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones.
export {Calculadora};