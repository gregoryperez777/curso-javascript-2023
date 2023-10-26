let a = 10;
let b = a;

a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = juan;

ana.nombre = 'ana';

console.log({ juan, ana });

/**
 *  Nota en javascript todo es un objeto exceptuando los primitivos
 *  
 *  Todos los primitivos se pasan por valor
 * 
 *  Y Todos los objetos se pasan por referencia
 */

/** 
*   parametro rest vs spread operator
*   
    ejemplo parametro rest

    une todos los argumentos en una sola variable y lo transforma como un arreglo
    const hola = (...args ) => { console.log(args) } 

    ejemplo spreat operator (Rompe la referencia que hay en el objeto) 

    const mundo = { msj: 'Hola Mundo' };

    const hola = { ...mundo };
*
*/


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos

const frutas = ['manzana', 'pera', 'piña'];

// Forma de romper referencia
console.time('slice');
const otrasFrutas1 = frutas.slice();
console.timeEnd('slice');

// Otra Forma de romper referencia
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas1.push('mango');
otrasFrutas2.push('mango');

console.table({ frutas, otrasFrutas1 });