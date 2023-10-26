
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

   // Ejemplo Basico

   // const myGenerator = myFirstGeneratorFunction();

   // console.log(myGenerator.next());
   // console.log(myGenerator.next());
   // console.log(myGenerator.next());
   // console.log(myGenerator.next());
   // console.log(myGenerator.next());
   // console.log(myGenerator.next());
   // console.log(myGenerator.next());

   const genId = idGenerator();

   console.log(genId.next());

   const button = document.createElement('button');
   button.innerText = 'Click me';
   element.append(button);

   const renderButton = () => {
      const { value } = genId.next();
      button.innerText = `Click ${value}`;
   }

   // cero argumentos del callback cero argumentos de renderButton
   // puedo entonces llamar solo a render button
   // button.addEventListener('click', () => renderButton())

   button.addEventListener('click', renderButton);

}

function* idGenerator() {
   let currentId = 0;

   while ( true ) {
      yield ++currentId;
   }
}




/*
   Funciones generadoras 

   No puede usar funciones de flechas

   Descripcion:

   Los generadores son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.
*/

function* myFirstGeneratorFunction() {
   
   yield 'Primer valor';
   yield 'Segundo valor';
   yield 'Tercer valor';
   yield 'Cuarto valor';
   
   return 'Ya no hay valores';
   yield 'Ya no hay valores';
}