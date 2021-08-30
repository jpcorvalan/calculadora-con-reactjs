import React, {Fragment} from 'react';
import {Boton} from './Boton';
import {GrillaTresColumnas, UnaColumna, DivEnFila} from './styles/Botonera';


function Botonera({ initialInputState, setInputState }){

    // Creamos un arreglo que contendrá los números de la calculadora junto con el '.'
    // Estos estarán ordenados de acuerdo al orden que normalmente se haya en las calculadoras
    const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

    // En un arreglo aparte colocaremos los operadores aritméticos
    const calculos = ['/', 'X', '+', '-'];


    return(

        <Fragment>

        {/* Enviamos los botones de AC (All clear) y C (Clear). Estarán uno al lado del otro y se repartirán el ancho 50/50 cada uno */}

            <DivEnFila>
                <Boton 
                    digito={"AC"}
                    color={true}
                    setInputState={setInputState}
                    initialInputState={initialInputState}
                />
                <Boton 
                    digito={"C"}
                    color={true}
                    setInputState={setInputState}
                    initialInputState={initialInputState}
                />
            </DivEnFila>


        {/* Este contenedor estará por debajo, y contendrá 2 elementos:
                1 - La sección de botones de los números
                2 - La sección de botones con los operadores aritméticos  */}
            <DivEnFila>


            {/* Los botones numéricos estarán divididos en 3 columnas */}
                <GrillaTresColumnas>


                {/* Recorremos el arreglo de números e invocamos al componente "Boton", que recibirá como propiedad, el dígito
                    correspondiente a cada elemento del arreglo */}
                    {numeros.map((num) => 
                        <Boton 
                            digito={num}
                            color={false}
                            initialInputState={initialInputState}
                            setInputState={setInputState}
                        />
                    )}

                </GrillaTresColumnas>

            {/* Los operadores aritméticos estarán repartidos en 1 columna individual, uno abajo del otro.
                Y se posicionarán al lado derecho de los botones numéricos */}
                <UnaColumna>


                {/* Recorremos el arreglo de operadores aritméticos, y de igual forma, le enviamos como propiedad el dígito
                    correspondiente al elemento de ese arreglo */}
                    {calculos.map((calc) => 
                        <Boton 
                            digito={calc}
                            color={true}
                        />
                    )}

                </UnaColumna>
            
            </DivEnFila>


        {/* Por último, debajo de todo, se coloca el botón de '=', que ocupará todo el ancho del contenedor */}
            <Boton 
                digito={"="}
                color={true}
            />

        </Fragment>
    )
}


// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones de nombrado.
export {Botonera}