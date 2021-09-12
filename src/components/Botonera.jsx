import React, { Fragment } from 'react';
import { Boton } from './Boton';
import { GrillaTresColumnas, UnaColumna, DivEnFila } from './styles/Botonera';

function Botonera({ initialInputState, setInputState }) {
	// Creamos un arreglo que contendrá los números de la calculadora junto con el '.'
	// Estos estarán ordenados de acuerdo al orden que normalmente se haya en las calculadoras
	const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

	// En un arreglo aparte colocaremos los operadores aritméticos
	const calculos = ['/', '*', '+', '-'];

	// Botones de memoria
	const memoria = ['M+', 'MR', 'MC'];

	return (
		<Fragment>
			{/* Los botones iniciales serán los de memoria: 
            
                -M+ -> Guarda el valor en pantalla
                -MR -> Recupera el último valor guardado en la memoria (Memory Recall)
                -MC -> Borra el último dato guardado en la memoria (Memory Clear)                
            */}
			<DivEnFila>
				{memoria.map((item) => (
					<Boton
						digito={item}
						color={'#7cb342'}
						initialInputState={initialInputState}
						setInputState={setInputState}
						key={item}
					/>
				))}
			</DivEnFila>

			{/* Enviamos los botones de AC (All clear), C (Clear) y los paréntesis, estos se repartirán el ancho por igual. */}

			<DivEnFila>
				<Boton
					digito={'AC'}
					color={'#c62828'}
					initialInputState={initialInputState}
					setInputState={setInputState}
				/>
				<Boton
					digito={'C'}
					color={'#c62828'}
					initialInputState={initialInputState}
					setInputState={setInputState}
				/>
				<Boton
					digito={'('}
					color={'#89b4f8'}
					initialInputState={initialInputState}
					setInputState={setInputState}
				/>
				<Boton
					digito={')'}
					color={'#89b4f8'}
					initialInputState={initialInputState}
					setInputState={setInputState}
				/>
			</DivEnFila>

			{/* Este contenedor estará por debajo, y contendrá 2 elementos:
                1 - La sección de botones de los números
                2 - La sección de botones con los operadores aritméticos  */}
			<DivEnFila>
				{/* Los botones numéricos estarán divididos en 3 columnas */}
				<GrillaTresColumnas>
					{/* Recorremos el arreglo de números e invocamos al componente "Boton", que recibirá como propiedad, el dígito
                    correspondiente a cada elemento del arreglo */}
					{numeros.map((num) => (
						<Boton
							digito={num}
							color={'whitesmoke'}
							initialInputState={initialInputState}
							setInputState={setInputState}
							key={num}
						/>
					))}
				</GrillaTresColumnas>

				{/* Los operadores aritméticos estarán repartidos en 1 columna individual, uno abajo del otro.
                Y se posicionarán al lado derecho de los botones numéricos */}
				<UnaColumna>
					{/* Recorremos el arreglo de operadores aritméticos, y de igual forma, le enviamos como propiedad el dígito
                    correspondiente al elemento de ese arreglo */}
					{calculos.map((calc) => (
						<Boton
							digito={calc}
							color={'#89b4f8'}
							initialInputState={initialInputState}
							setInputState={setInputState}
							key={calc}
						/>
					))}
				</UnaColumna>
			</DivEnFila>

			{/* Por último, debajo de todo, se coloca el botón de '=', que ocupará todo el ancho del contenedor */}
			<Boton
				digito={'='}
				color={'#89b4f8'}
				initialInputState={initialInputState}
				setInputState={setInputState}
			/>
		</Fragment>
	);
}

// Opté por hacer un export explícito por sobre el default, para que, a la hora de importarlo en otros archivos, tenga que hacerlo también
// por exactamente el mismo nombre de la función, y así evitar posibles confusiones de nombrado.
export { Botonera };
