import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param {String|Number} id
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();


    // const users = data.map(userLike => localhostUserToModel(userLike));
    
    // como solo recibimos un argumento podemos llamar a la funcion localhostUserToModel
    // de una vez ya que es equivalente a lo de arriba
    const user = localhostUserToModel(data);

    console.log({ user });

    return user;
}