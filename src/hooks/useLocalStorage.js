import { useState } from 'react';


function useLocalStorage(itemName, initialValue) {
    // Obtenemos el dato desde el localStorage
    const localStorageItem = localStorage.getItem(itemName);

    // Creamos una variable para guardar el item parseado
    let parsedItem;

    if (!localStorageItem) {
        // Si no hay datos del item solicitado, lo creamos
        localStorage.setItem(itemName, JSON.stringify(initialValue));

        // Guardamos el valor inicial que llegó por parámetro
        parsedItem = initialValue;
    } else {
        // Si hay algo, lo guardamos en una variable
        parsedItem = JSON.parse(localStorageItem);
    }

    // Creamos un state del valor nuevo, o el valor que llegó
    const [value, setValue] = useState(parsedItem);

    // Esta función se exportará, y será el "set" de nuestro hook personalizado
    const saveItem = (newItem) => {

        // Convertimos a texto plano el item que recibió la función
        const stringyfyItem = JSON.stringify(newItem);

        // Guardamos el item en localStorage
        localStorage.setItem(itemName, stringyfyItem);

        // Seteamos el valor
        setValue(newItem);
    }

    return [
        value,
        saveItem
    ]
}


export { useLocalStorage };
