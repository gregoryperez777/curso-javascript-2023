
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];


console.warn('While');
let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

// consideradas false
// undefined
// null
// false

// aqui cuando acceda a una posicion de memoria
// que no existe retornara undefined
// por ende es un ciclo valido
while (carros[i]) {

    if (i === 1) {
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do While');

// Siempre se ejecutara aunque sea una vez
// ya que entra al ciclo directamente sin evaluar
// una condicion previa
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while(carros[j]);