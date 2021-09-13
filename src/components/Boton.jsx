import React, { useContext } from 'react';
import { BotonEstilizado } from './styles/BotonEstilizado';
import { ListaGuardadosContext } from '../context/ListaGuardadosContext';

// Si no se recibe el estado inicial del input, este se coloca como un string vacío.
// Si no se recibe la función para cambiar el estado inicial del input, se coloca por defecto como una función vacía.
function Boton({ digito = 0, color, initialInputState = '', setInputState = () => undefined }) {
	// Traemos todas las funciones de estado que nos provee el contexto
	const {
		lista,
		actualizarLista,
		indiceLista,
		actualizarIndiceLista,
		visibilidadInputPrincipal,
		setVisibilidadInputPrincipal,
	} = useContext(ListaGuardadosContext);

	const comprobar = (digito) => {
		switch (digito) {
			case 'AC':
				// Si el digito que llega es AC (All-Clear), el input pasará a tener una cadena vacía
				setInputState('');
				break;

			case 'C':
				// Si el digito es 'C' (Clear), el input pasará a tener la cadena actual -1 caracter
				setInputState(initialInputState.substring(0, initialInputState.length - 1));
				break;

			case 'M+':
				// M+ está hecho para guardar un número en la memoria.
				// Creamos expresiones regulares para verificar que solo puedan guardarse números en la memoria.
				// Solo el signo de "-" será aceptado, para guardar también números negativos.
				const numRegExp = /[0-9]/g;
				const calcRegExp = /[+*/]/g;

				// Comprobamos que se cumplan ambas expresiones regulares.
				if (numRegExp.test(initialInputState) && !calcRegExp.test(initialInputState)) {
					actualizarLista([...lista, initialInputState]);
				}
				break;

			case 'MR':
				// Memory Recall
				// Si el input principal está visible, y existen elementos guardados,
				// se cambia la visibilidad, y se pasa a mostrar el input secundario
				// con el primer elemento de la lista de guardados
				if (visibilidadInputPrincipal && lista.length > 0) {
					setVisibilidadInputPrincipal(false);
				} else {
					// Si el input secundario ya se está mostrando con el primer elemento de la lista
					// al seguir presionando el botón, se navegará por los otros números guardados.
					// Todo esto, sumando 1 al indice cada vez que se presione el botón.
					if (lista.length > 0 && indiceLista < lista.length) {
						actualizarIndiceLista(indiceLista + 1);
					} else if (lista.length > 0 && indiceLista >= lista.length) {
						actualizarIndiceLista(0);
					}
				}
				break;

			case 'CN':
				// Choose Number
				// Cuando el usuario esté listo para escojer un número de la lista tiene que presionar este botón

				// Al presionar el botón, verificamos que efectivamente el input principal esté oculto
				// y se esté mostrando el input secundario que contiene la lista.
				if (!visibilidadInputPrincipal) {
					// Al cumplir la condición, concatenamos el cálculo del input principal
					// con el número de la lista que fue seleccionado, este último se colocará entre paréntesis.
					setInputState(`${initialInputState}(${lista[indiceLista]})`);

					// Finalmente, cambiamos a verdadera la visibilidad del input principal para ver el resultado.
					setVisibilidadInputPrincipal(true);
				}

				// Si el input principal es el que se está mostrando, este botón no hará nada
				break;

			case 'MC':
				// Memory Clear, borrará el último dato de la lista
				if (lista.length > 0) {
					let listaAux = [...lista];
					listaAux.pop();
					actualizarLista(listaAux);
				}
				break;

			case '=':
				// Creamos una variable que contendrá un resultado cualquiera, proveniente de la función "eval()"
				let resultado;

				// Utilizamos un bloque try/catch para capturar una posible excepción que venga de la función "eval()"
				try {
					// En el caso de que la expresión matemática sea correcta, la colocamos en el input
					resultado = eval(initialInputState);
					setInputState(resultado.toString());
				} catch (SyntaxError) {
					// Caso contrario, capturamos la excepción y colocamos en "resultado" una frase que lo indique.
					resultado = 'Expresión Incorrecta';
					setInputState(resultado);
				}

				break;

			default:
				// Si el digito no es ninguno de los anteriores, entonces es un digito (número, signo o punto).

				// Si actualmente en el input está escrita la frase de "Expresión Incorrecta", esta se reemplazará completamente
				// al escribir nuevamente un digito. Este se parsea a String, ya que sino, este se convierte en un entero,
				// y no puede ser trabajado por la tecla "C" (la función substring() arrojará un error)
				if (initialInputState === 'Expresión Incorrecta') {
					setInputState(String(digito));
				} else {
					setInputState(initialInputState + digito);
				}
				break;
		}
	};

	return (
		<BotonEstilizado onClick={() => comprobar(digito)} digito={digito} color={color}>
			{digito}
		</BotonEstilizado>
	);
}

// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones de nombrado
export { Boton };
