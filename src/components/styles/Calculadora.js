import styled from "styled-components";


// Estilizado
const DivCentrado = styled.div`
        
    /* Las 4 propiedades siguientes son para mantener centrado los elementos hijos */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Uno de los anchos más bajos para Smartphones es de 320px, por lo que preferí que el ancho de la calculadora no sobrepase ese valor */
    min-width: 300px;        

    padding: 15px;
    border-radius: 10px;
    background-color: #1e1e1e;

`

const InputStyled = styled.input `

    width: 100%;
    height: 50px;
    background-color: #2c3033;
    color: whitesmoke;
    font-size: 1.5rem;
    text-align: end;
    outline: none;

    margin-bottom: 15px;

`


export {DivCentrado, InputStyled}