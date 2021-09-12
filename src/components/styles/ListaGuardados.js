import styled from "styled-components";

const TituloLista = styled.p`

    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 1.8rem;
    margin: 0;
    color: whitesmoke;

`


const ContenedorLista = styled.div`

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

const Lista = styled.ul`

    list-style-type: none;
    padding: 0;

`

const Items = styled.li`

    font-family: 'ZCOOL QingKe HuangYou', cursive;    
    font-size: 1.4rem;
    color: #7cb342;

`

export { TituloLista, ContenedorLista, Lista, Items }