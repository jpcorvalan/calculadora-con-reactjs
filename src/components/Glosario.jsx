import React from 'react';
import { TituloLista, ContenedorLista } from './styles/ListaGuardados';
import { GlosarioInfo } from './styles/Glosario';

function Glosario() {
	return (
		<ContenedorLista>
			<TituloLista>Glosario de botones</TituloLista>
			<GlosarioInfo>
				{' '}
				M+ - sirve para guardar un número en la memoria (puede guardar más de uno, los almacenará en
				una lista).{' '}
			</GlosarioInfo>
			<GlosarioInfo>
				{' '}
				MR - (Memory Recall) puede invocar al primer número en la lista guardada. Para navegar entre
				los otros números, siga presionando este botón.{' '}
			</GlosarioInfo>
			<GlosarioInfo>
				{' '}
				CN - (Choose Number) cuando finalmente quiera escoger uno de los números de la lista, presione
				este botón para seleccionar dicho número y llevarlo al cálculo.{' '}
			</GlosarioInfo>
			<GlosarioInfo> MC - (Memory Clear) borra el último número guardado en la lista. </GlosarioInfo>
		</ContenedorLista>
	);
}

export { Glosario };
