import './App.css';
import { Calculadora } from './components/Calculadora';
import React, { useEffect } from 'react';
import { DivCentrado } from './components/styles/App';
import { ListaGuardados } from './components/ListaGuardados';
import { ListaGuardadosContext } from './context/ListaGuardadosContext';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

    const [lista, actualizarLista] = useLocalStorage('numeros_guardados', []);

    const numerosGuardados = {
        lista,
        actualizarLista
    }

    useEffect(() => { }, [lista, actualizarLista]);

    return (

        <DivCentrado>
            <ListaGuardadosContext.Provider value={numerosGuardados} >
                <Calculadora />
                <ListaGuardados />
            </ListaGuardadosContext.Provider>
        </DivCentrado>

    );
}

export default App;
