import styled from 'styled-components';


const BotonEstilizado = styled.button `

    width: 100%;
    height: 60px;
    font-size: 1.5rem;
    background-color: #202125;
    color: ${props => props.color === true ? "#89b4f8" : "whitesmoke"};

    /* En este caso, quise que el botón 0 tenga un tamaño más grande que el de los otros números (ocupe 2 cuadros horizontales de la grilla),
        asi que opté por hacer un condicional que me permita hacerlo.
        En el caso de que el digito que venga en las props, no sea 0, entonces se sigue respetando el tamaño por defecto  */
    grid-column: ${props => props.digito === 0 ? "1 / 3" : "auto"};
    
    border-radius: 4px;
    border: none;
    outline: none;

    transition: 0.1s;

    &:hover{
        background-color: #2c3033;
    }

`


export {BotonEstilizado}