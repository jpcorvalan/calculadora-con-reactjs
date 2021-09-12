import './App.css';
import { Calculadora } from './components/Calculadora';
import React from 'react';
import { DivCentrado } from './components/styles/App';
import { ListaGuardados } from './components/ListaGuardados';


function App() {

    return (

        <DivCentrado>
            <Calculadora />
            <ListaGuardados />
        </DivCentrado>

    );
}

export default App;
