console.log(miNuevoNombre);

console.log('Hola Mundo');

// let a = 10;
// var b = 10;
// const c = 10;

// let a = 10; 
// let b = 10;
// let c = 10;
// let d = 10;
// let x = 10;

// Nota para usar debugger F5 seleccionamos Node y luego tendremos 
// los controles para depurar

let a = 10
let b = 20
let c = 'Hola '
let d = 'spiderman'
let x = a + b;

const saludo = c + d;

// console.log('a', a);
// console.warn('b',b);
// console.error('c',c);

// Para ponerle color a la consola con css
// console.log('%c Mis variables', 'color: Blue; font-weight: bold')
// console.log({ a });
// console.warn({ b });
// console.error({ c });

c = 'hola de nuevo'

// console.table({ a,b,c,d,x })

// Nota: cuando usamos var se coloca la variable en el objeto global
// window "esto no lo sabia"


// Let y Const no sobre escriben el objecto global window
let outerWidth = 1000000;
const outerHeight = 600;

// Nota en javascript cualquier variable que no este inicializada tendra el valor de undefined

var miNuevoNombre = 'Gregory';