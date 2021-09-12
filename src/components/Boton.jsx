import React, { useContext } from 'react';
import { BotonEstilizado } from './styles/BotonEstilizado';
import { ListaGuardadosContext } from '../context/ListaGuardadosContext';

// Si no se recibe el estado inicial del input, este se coloca como un string vacío.
// Si no se recibe la función para cambiar el estado inicial del input, se coloca por defecto como una función vacía.
function Boton({ digito = 0, color, initialInputState = '', setInputState = () => undefined }) {
	const contextoNumerosGuardados = useContext(ListaGuardadosContext);

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
					contextoNumerosGuardados.actualizarLista([
						...contextoNumerosGuardados.lista,
						initialInputState,
					]);
				}
				break;

			case 'MC':
				// Memory Clear, borrará todos los datos almacenados, reemplazándolos por una cadena vacía.
				contextoNumerosGuardados.actualizarLista([]);
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
