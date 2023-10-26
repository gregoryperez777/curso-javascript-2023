// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimirArgumentos() {
    console.log(arguments);
}

/**
 * Las arrow functions no tienen acceso directo al objecto implicito 
 * arguments sin embargo podemos acceder a el pasando como argumento
 * y usando el operador rest
 * 
 * bajo 2 consideraciones 
 * 
 * 1 - Despues de el no puede venir otro argumento a la funcion
 * 2 - si se quiere extraer un valor antes del parametro rest ya no estaria en los arguments
 */
const imprimirArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
}

imprimirArgumentos(10, true, false, 'Fernando', 'Hola');
const [ casado, vivo, nombre, saludo ] = imprimirArgumentos2(10, true, false, 'Fernando', 'Hola');

console.log({  casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }


const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({nombre}),
    console.log({codeName}),
    console.log({vivo}),
    console.log({edad}),
    console.log({trajes})
}

console.log(imprimePropiedades(tony));