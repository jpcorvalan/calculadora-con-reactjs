<h1><center>React Calculator</center></h1>

# ¿Cómo instalar?

<br>

1 - Descargar el proyecto

2 - Abrir una terminal en la carpeta raíz del proyecto

3 - Ejecutar el siguiente comando:

`npm install`

4 - Esperar a que finalice la descarga de las librerías de Node, y mantener abierta la terminal.

<br>

# ¿Cómo probar?

<br>

1 - Ejecutar en la terminal el siguiente comando:

`npm run start`

2 - Esperar que el proyecto abra, por defecto, se abrirá en el navegador por defecto del equipo, en la dirección "localhost:3000"

3 - Una vez abierta la aplicación puede proceder a probar las funcionalidades que serán explicadas a continuación.

<br>

# Funcionalidades

-   La calculadora puede resolver cálculos encadenados
-   Puede guardar números en la memoria, los cuales se verán en una lista más abajo.
-   Puede navegar entre esos números con el botón **MR** (Memory Recall).
-   Puede elegir el número guardado con el botón **CN** (Choose number).
-   Puede borrar los números de a 1 con el botón **MC** (Memory clear).

<br>

# Validaciones

Para realizar las diferentes validaciones que requiere la calculadora, se utilizaron expresiones regulares.

Cada vez que se encuentre alguna expresión que no pueda resolverse, arrojará "Expresión Incorrecta" en el display.

También, gracias a las **regexp**, se logró que en la lista solamente puedan guardarse números, no cálculos.

<br>

# ¿Qué se implementó de ReactJS y otras librerías?

-   **Hooks** -> useState, useEffect, useContext, useLocalStorage (hook personalizado para manejar el localStorage)
-   **StyledComponents**, para el estilizado de los componentes, como el display, la botonera, los botones y la calculadora en general.
