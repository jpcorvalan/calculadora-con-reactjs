import React, { useContext } from 'react';
import { ContenedorLista, Lista, TituloLista, Items } from './styles/ListaGuardados';
import { ListaGuardadosContext } from '../context/ListaGuardadosContext';

function ListaGuardados() {
	// Obtenemos el contexto, en el cual guardamos la lista de cálculos y la función que los modifica.
	const { lista } = useContext(ListaGuardadosContext);

	// Creamos una key, que se incrementará en la iteración, para que cada item de la lista tenga un identificador único.
	let key = 0;

	return (
		<ContenedorLista>
			<TituloLista>Lista de numeros guardados</TituloLista>
			<Lista>
				{lista.map((calc) => {
					key += 1;
					return <Items key={key}>{calc}</Items>;
				})}
			</Lista>
		</ContenedorLista>
	);
}

export { ListaGuardados };
