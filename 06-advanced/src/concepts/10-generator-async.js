import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {

   const heroGenerator = getHeroGenerator();
   let isFinished = false;


   do {

      const { value, done } = await heroGenerator.next();

      console.log({ value, done });

      isFinished = done;

      if ( value !== 'No hay mas') 
         element.innerHTML = value;

   } while (!isFinished);

}

async function* getHeroGenerator() {
   for (const hero of heroes) {
      await sleep();
      yield hero.name;
   }

   return 'No hay mas';
}

const sleep = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, 1000);
   });
} 