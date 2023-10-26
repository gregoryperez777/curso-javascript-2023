let juegos = ['zelda', 'Mario', 'Metroid', 'chrono'];


console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach( ( element, index, arr ) => {
    console.log({ element, index, arr });
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire emblemnm');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos })

let metroidIndex = juegos.indexOf('Metroid');

console.log({ metroidIndex })