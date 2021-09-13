import React, { useState, useEffect, useContext } from 'react';
import { Botonera } from './Botonera';
import { DivCentrado, InputStyled } from './styles/Calculadora';
import { ListaGuardadosContext } from '../context/ListaGuardadosContext';

function Calculadora() {
	const [initialState, setInputState] = useState('');
	const { visibilidadInputPrincipal, lista, indiceLista } = useContext(ListaGuardadosContext);

	const ocultarInput = (valor) => {
		if (valor) {
			return 'text';
		} else {
			return 'hidden';
		}
	};

	// Para eliminar la mayor cantidad de errores al trabajar con los cálculos, utilizamos expresiones regulares
	// Estas, al estar dentro del useEffect(), estarán pendiente cada vez que se escriba un digito en el input.

	useEffect(() => {
		// -------------------------------------------------------------------------------------------------------------------------
		// Las RegExp se escriben entre barras "/", y utilizan muchos caracteres especiales (entre ellos, justamente, los signos matemáticos).
		// Para utilizar de forma literal estos signos y que no afecten a la expresión, se les antepone una barra invertida "\".
		// Con {x,} (siendo x un Natural) no podrá escribirse más de 1 caracter de cálculo dentro del input (1++2, 14**2, por ejemplo).
		// También utilizan flags. Los /g en estos casos, indican que debe analizarse toda la cadena completa (global).
		// Más información sobre RegExp -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
		// -------------------------------------------------------------------------------------------------------------------------
		let regExSuma = /\+{2,}/g;
		let regExResta = /-{2,}/g;
		let regExProd = /\*{2,}/g;
		let regExDiv = /\/{2,}/g;

		if (regExSuma.test(initialState)) {
			setInputState(initialState.replace(regExSuma, '+'));
		} else if (regExResta.test(initialState)) {
			setInputState(initialState.replace(regExResta, '-'));
		} else if (regExProd.test(initialState)) {
			setInputState(initialState.replace(regExProd, '*'));
		} else if (regExDiv.test(initialState)) {
			setInputState(initialState.replace(regExDiv, '/'));
		} else {
			setInputState(initialState);
		}
	}, [initialState, setInputState]);

	// Return y render
	return (
		<DivCentrado>
			{/* Este input será el principal, que contendrá los cálculos que vaya haciendo el usuario
                Por supuesto, aparece como visible por defecto */}
			<InputStyled
				type={ocultarInput(visibilidadInputPrincipal)}
				defaultValue={initialState}
				disabled={true}
			/>

			{/* Este input estará oculto, y será el encargado de visualizar los números guardados de la lista
                cuando el usuario lo indique*/}
			<InputStyled
				type={ocultarInput(!visibilidadInputPrincipal)}
				defaultValue={lista[indiceLista]}
				disabled={true}
			/>
			<Botonera initialInputState={initialState} setInputState={setInputState} />
		</DivCentrado>
	);
}

// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones.
export { Calculadora };
