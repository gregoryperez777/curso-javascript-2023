const state = [
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

const index = 1;
const newName = 'Green Lantern';

// const newState = state.map((hero, i) => {

//     if ( i === index ) {
//         hero.name = newName;
//     }

//     return {...hero};
// });

// with regresa un nuevo arreglo pero con la referencia a todos sus elementos

const newState = state.with(index, {
    ...state.at(index), // ---> aqui estoy utilizo el spreat operator para obtener todas las propiedades del objeto dentro del array y at para indicar la posicion del array que quiero  
    name: 'Green Lantern'
})
state[0].name = 'Volcan negro';

// aqui a pesar de que map genera un nuevo arreglo 
// no rompe la referencia y para eso se usa { ...hero } en el return 

console.table(newState)