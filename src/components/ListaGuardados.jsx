import React, { useEffect } from 'react';
import { StyListaGuardados } from './styles/ListaGuardados';
import { useLocalStorage } from '../hooks/useLocalStorage';

function ListaGuardados() {
	const [item, saveValue] = useLocalStorage('calculos_guardados', []);

	useEffect(() => {
		console.log('cambiado');
	}, [item]);

	return (
		<StyListaGuardados>
			<p>Lista de calculos</p>

			<ul>
				{item.map((calc) => (
					<li>{calc}</li>
				))}
			</ul>
		</StyListaGuardados>
	);
}

export { ListaGuardados };
