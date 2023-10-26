const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    }
];

/**
 *  Nota los arreglos y los objectos son pasados por referencias
 *  en javascript.
 * 
 *  Por lo general usamos el spread operator para realizar la copia de un
 *  array sin embargo si el array contiene objetos esos objectos siguen siendo
 *  pasados por referencias y si a su vez estos objecto tienen arrays y objectos
 *  estos tambien se pasarian por referencia 
 * 
 *  ejemplo 
 * 
 *  const superHeroesCopy = [ ...superHeroes ];
 * 
 *  teoricamente aqui copiamos el contenido del array superHeroes
 * 
 *  pero si realizamos   
 *  
 *  superHeroesCopy[0].name = ironman
 * 
 *  tambien de cambiara en superHeroes y esto ocurre por la referencia
 * 
 *  para un valor primitivo int, string ... etc esto no aplica 
 */

// Esto tambien es permitido
// superHeroes = JSON.parse(JSON.stringify(superHeroes));

const superHeroesCopy = structuredClone(superHeroes);

console.table(superHeroes);
console.table(superHeroesCopy);