import './App.css';
import {Calculadora} from './components/Calculadora';
import React from 'react';
import styled from 'styled-components';


function App() {

    const DivCentrado = styled.div `

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    `

    return (
        
        <DivCentrado>
            <Calculadora />
        </DivCentrado>
        
    );
}

export default App;
