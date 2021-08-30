import styled from "styled-components";

// Estilizado

// Creo una grilla de 3 columnas, en la cual van a ir los números del arreglo "numeros"
// Esta grilla ocupará un 80% del espacio de su contenedor padre
const GrillaTresColumnas = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;

`

// Creo una grilla de 1 sola columna, la cual contendrá los cálculos, del arreglo "calculos"
// Esta se posicionará al lado derecho de la grilla de números, ocupando un 20% del contenedor padre
// Siendo que el 80% restante está siendo ocupada por la grilla de números
const UnaColumna = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 20%;

`



// Para que ambas grillas hechas anteriormente queden posicionadas una al lado de la otra
// Creo un div con display flex, y hago que su dirección sea en fila (row)
const DivEnFila = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;

`


export {GrillaTresColumnas, UnaColumna, DivEnFila}