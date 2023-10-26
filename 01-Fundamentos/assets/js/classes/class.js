/**
 * Todas las clases creadas en Javascript tienen el 'use strict' 
 * implementado
 */
class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        console.log(this.nombre) // undefined porque al ser un metodo estatico significa que se esta trabajando con una clase no instanciada 
        console.log('Hola a todos soy un mensaje estatico');
    }

    nombre = ''; 
    codigo = '';
    frase  = '';
    comida = '';

    /**
     * El constructor es el unico metodo que retorna la instancia de un
     * objeto y no retorna undefined
     */
    constructor(nombre = 'Sin nombre' , codigo = 'Sin codigo', frase = 'Soy tu amigable vecino spiderman') {
        console.log('Hola!');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        // aqui se hace referencia a la clase como tal y no a la instancia
        Persona._conteo++;
    }

    // usualmente deberia recibir un solo argumento
    // por buena practica

    // Nota importante el nombre del metodo set no puede ser el mismo que
    // propiedad declarada se alli viene que en cierto ejemplos encontramos que
    // las propiedades empiezan con _ sino se crea un ciclo infinito 
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        console.log(`La comida favorita de ${ this.nombre } es ${this.comida}`)
    }

    quienSoy () {
        console.log(`Soy ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${This.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman   = new Persona('Tony star', 'Ironman', 'Yo soy Ironman');

console.log(spiderman);
// console.log(ironman);

spiderman.quienSoy();

spiderman.setComidaFavorita = 'Pie de cereza de la tia May';

// Esto es valido pero es una mala practica
spiderman.nemesis = 'Duende verde';

// Esto es valido porque no se le especifico a la clase que es una 
// propiedad privada 
spiderman.comida = 'Duende verde';



// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('conteo estático: ', Persona._conteo);
console.log('conteo estático: ', Persona.conteo);

Persona.mensaje();

// Se pueden crear propiedades externas fuera de la clase
// Lo cual no es buena practica pero se puede en javascript
Persona.propiedadExterna = 'Hola mundo';

// ironman.quienSoy();

/**
 * Notas nomenclatura sugerida para realizar 
 * clases en javascript
 * 
 * class {
 *      1- Propiedades y metodos estaticos (Son opcionales)
 *      2- Propiedad
 *      3- constructor
 *      4- sets and gets
 *      5- metodos
 * }
 * 
 * 
 */