const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

    // Puntaje
    let puntosJugador = 0, puntosComputadora = 0; 

    let puntosJugadores = [];

    // Referencias del HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

          
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
        
    // inicializa el juego        
    const inicializarDeck = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta funcion crea una nueva baraja
    const crearDeck = () => {

        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }

        return _.shuffle(deck);
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay carta en el deck';
        }

        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        
        return  (isNaN(valor))  ? 
                (valor === 'A') ? 11 : 10 
                : valor * 1;    
    }

    const insertarCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        console.log('divCartasJugadores', divCartasJugadores);
        divCartasJugadores[turno].append(imgCarta);
    }

    // Determina el ganador
    const determinarGanador = () => {

        const [puntosJugador, puntosComputadora] = puntosJugadores;

        console.log({ puntosJugador, puntosComputadora })

        setTimeout( () => {
            if (puntosComputadora === puntosJugador) {
                alert('Nadie gana hubo un empate!')
            } else if (puntosJugador > 21) {
                alert('Perdiste!');
            } else if (puntosComputadora > 21) {
                alert('Ganaste!');
            } else if (puntosJugador > puntosComputadora) {
                alert('Ganaste!');
            } else {
                alert('Perdiste!');
            }
        }, 100);

        

    };

    // Turno = 0 primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    // Turno de la computadora 
    const turnoComputadora = (puntosMinimos) => {


        console.log('puntosMinimos', puntosMinimos);

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            insertarCarta(carta, puntosJugadores.length - 1);

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        determinarGanador()
        
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();

        puntosJugador = acumularPuntos(carta, 0);

        insertarCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            
            turnoComputadora(puntosJugador);
            
        } else if (puntosJugador === 21) {
            console.warn('21, Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);

        }


    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
        
    });

    btnNuevo.addEventListener('click', () => {
       
        inicializarDeck();
        
    });

    return {
        nuevoJuego: inicializarDeck
    }

})();


/**
 * 2C = Two of clubs (Tréboles) 
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Tréboles)
 */

