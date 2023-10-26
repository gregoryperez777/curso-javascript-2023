import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = (element) => {

   const id1 = '5d86371f1efebc31def272e2';
   const id2 = '5d86371f2343e37870b91ef1';

   findHeroe(id1, (error, heroe1) => {
      // element.innerHTML = heroe?.name || 'No hay heore';

      if (error) {
         element.innerHTML = error;
         return;
      }

      findHeroe(id2, (error, heroe2) => {
         if (error) {
            element.innerHTML = error;
            return;
         }

         element.innerHTML = `${heroe1.name} / ${heroe2.name}`;

      });

   });

}

/**
 * 
 * @param {String} id 
 * @param { (error: String|null, hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => {

   const hero = heroes.find(hero => hero.id === id);

   if (!hero) {
      callback(`Hero with id ${ id } not found.`);
      return;
   }

   callback(null, hero);
}