
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {

    /**
     *  casi siempre cuando queremos acceder a una variable de entorno
     *  para acceder a ella usamos process.env PERO en vite no
     * 
     *  para acceder a estas usamos
     * 
     *  import.meta.env
     */

    console.log(import.meta.env);

    const html = `
        Dev:    ${ import.meta.env.DEV } <br/>
        PROD:   ${ import.meta.env.PROD } <br/>
        KEY:    ${ import.meta.env.VITE_API_KEY } <br/>
        URL:    ${ import.meta.env.VITE_BASE_URL }
    `;

    element.innerHTML = html;

}