import styled from "styled-components";


const StyListaGuardados = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Uno de los anchos más bajos para Smartphones es de 320px, por lo que preferí que el ancho de la lista no sobrepase ese valor */
    width: 300px;        

    padding: 15px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #1e1e1e;

`

export { StyListaGuardados }