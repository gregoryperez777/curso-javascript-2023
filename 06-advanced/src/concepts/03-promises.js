import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

   console.log('promiseComponent');

   const renderHero = (hero) => {
      element.innerHTML = hero.name;
   }

   const renderTwoHeroes = (hero1, hero2) => {
      element.innerHTML = `
         <h3>${hero1.name}</h3>
         <h3>${hero2.name}</h3>
      `;
   }

   const renderError = (error) => {
      element.innerHTML = `
         <h1>Error: </h1>
         <h3>${error}</h3>
      `;
   }

   const id1 = '5d86371f1efebc31def272e2';
   const id2 = '5d86371f25a058e5b1c8a65e';

   let hero1, hero2;


   // 1 Promise HELL
   // findHeroe(id1)
   //    .then( hero1 => {
         
   //       findHeroe(id2)
   //          .then(hero2 => {
   //             renderTwoHeroes(hero1, hero2);
   //          })
   //          .catch(renderError);
   //    })
   //    .catch(renderError);

   // 2 Cadena de promesas
   // findHeroe(id1)
   //    .then(hero => {
   //       hero1 = hero;
   //       return findHeroe(id2);
   //    })
   //    .then(hero2 => {
   //       renderTwoHeroes(hero1, hero2);
   //    })
   //    .catch(renderError);

   // 3 Promise All
   // Precondicion que las promesas no dependan una de la otra
   Promise.all([
      findHeroe(id1),
      findHeroe(id2)
   ])
   .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2) )
   .catch(renderError)
}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHeroe = (id) => {
   return new Promise((resolve, reject) => {
      const hero = heroes.find(hero => hero.id === id);

      if (hero) {
         resolve(hero);
         return;
      }

      reject(`Hero with id ${id} not found`);
   });
}