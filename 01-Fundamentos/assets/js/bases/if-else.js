
let a = 15;


// undefined, null, una asignacion
if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, ...

console.log({ dia });

if (dia === 0) {
    console.log('Es domingo');
} else if (dia === 1) {

    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes')
    // } else {
    //     console.log('No es lunes ni domingo')
    // }
    console.log('No es domingo');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo ...');
}

const getWeekDay = (day) => {
    const weekdays = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miercoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sabado'
    }

    return weekdays[day];
}

console.log('Dia', getWeekDay(dia) || 'Dia no definido');