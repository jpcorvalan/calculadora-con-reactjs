import './App.css';
import { Calculadora } from './components/Calculadora';
import React, { useState, useEffect } from 'react';
import { DivCentrado } from './components/styles/App';
import { ListaGuardados } from './components/ListaGuardados';
import { ListaGuardadosContext } from './context/ListaGuardadosContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Glosario } from './components/Glosario';


function App() {

    // Contiene la lista y su modificador, se le pasa un arreglo vacío en caso de que "numeros_guardados" no exista en el localStorage
    const [lista, actualizarLista] = useLocalStorage('numeros_guardados', []);

    // Contiene un número que servirá de índice para manipular la lista, con su modificador
    const [indiceLista, actualizarIndiceLista] = useState(0);

    // Contiene la visibilidad del input principal, cuando el input principal no se muestre
    // se mostrará otro, que contendrá la lista de números, y viceversa.
    const [visibilidadInputPrincipal, setVisibilidadInputPrincipal] = useState(true);

    // Este objeto se utiliza para el provider del contexto, y contiene todos los estados declarados de arriba.
    const contextoListaDeNumeros = {
        lista,
        actualizarLista,
        indiceLista,
        actualizarIndiceLista,
        visibilidadInputPrincipal,
        setVisibilidadInputPrincipal
    }

    // Cada vez que la lista se modifique, el componente hará render para que se visualice el cambio
    useEffect(() => { }, [lista, actualizarLista]);

    return (

        <DivCentrado>
            <ListaGuardadosContext.Provider value={contextoListaDeNumeros} >
                <Calculadora />
                <ListaGuardados />
            </ListaGuardadosContext.Provider>
            <Glosario />
        </DivCentrado>

    );
}

export default App;
