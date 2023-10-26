

const regresaTrue = () => {
    console.log('regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('regresa false')
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse()) // true

console.log('AND');
console.log(true && true);
console.log(true && !false);

console.log('4 condiciones', true && true && true && false);

console.log('====');

console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('OR');
console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones', true || true || true || false);

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// puedes colocar N condiciones y el valor de la variable si todas se cumplen sera el ultimo
const a1 = true && 'Hola Mundo' && 150;

// en este caso regresa falso porque el valor soyFalse rompe la condicion y es el ultimo valor que evaluo
// y asigna el valor de soyFalse no de la condicion
const a2 = 'hola' && 'mundo' && soyFalse && true;

const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({ a1, a2, a3, a4, a5 });