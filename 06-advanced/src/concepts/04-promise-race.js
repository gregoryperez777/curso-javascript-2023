
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

   element.innerHTML = 'Loading ...';

   const renderValue = (value) => {
      element.innerHTML = value;
   }

   // Promise.race
   // Se queda con el resultado de la promesa que responda mas rapido
   // basicamente las pone a competir

   Promise.race([
      slowPromise(), 
      mediumPromise(),
      mediumPromise(),
      fastPromise(), 
      fastPromise(),
      mediumPromise(),
      slowPromise(),
   ]).then( renderValue );

}

const slowPromise = () => new Promise( resolve => {
   setTimeout(() => {
      resolve('Slow Promise');
   }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
   setTimeout(() => {
      resolve('Medium Promise');
   },  1500);
});

const fastPromise = () => new Promise( resolve => {
   setTimeout(() => {
      resolve('Fast Promise');
   },  3000);
});