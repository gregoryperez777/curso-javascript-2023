function saludar(nombre) {

    /**
     *  Todas las funciones tradicionales (que usan la palabra function para declararse) en javascript
     *  tienen acceso a un objecto implicito llamado arguments el cual hace referencia a todos los argumentos
     *  enviados a la funcion
     */

    console.log(arguments);
    console.log('Hola ' + nombre);

    return 1;
}

// funcion anonima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Gregory', 40, true, 'Costa Rica');
console.log(retornoDeSaludar);


// saludar2('Gregory');

// saludarFlecha();
// saludarFlecha2('Carmen');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b;

// function getAleatorio() {
//     return Math.random();
// }

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());