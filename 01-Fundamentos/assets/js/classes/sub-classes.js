class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        console.log(this.nombre)
        console.log('Hola a todos soy un mensaje estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre' , codigo = 'Sin codigo', frase = 'Soy tu amigable vecino spiderman') {
        console.log('Hola!');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

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

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'The Avengers';
    }

    quienSoy () {
        console.log(`Soy ${ this.nombre }, ${this.clan}`);

        // llama a quienSoy de la clase Padre
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const spiderman = new Heroe();

console.log(spiderman);

spiderman.quienSoy();