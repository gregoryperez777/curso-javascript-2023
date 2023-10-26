import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user';


/**
 * 
 * @param {Like<User>} userLike 
 * @returns {User}
 */
export const saveUser = async (userLike) => {

    const user = new User(userLike);
    
    console.log({ user });

    if ( !user.firstName || !user.lastName)
        throw 'First & last name are required'
    
    const userToSave = userModelToLocalhost(user);
    let userUpdated;

    // TODO: aqui falta un mapper

    if (user.id) {
        return await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);
} 

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json' 
        }

    });

    const newUser = await res.json();

    console.log({ newUser });

    return newUser;
}

const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;

    const res = await fetch(url, {
        method: 'PATCH', // diferencia entre el PUT y el PATCH es que el PUT le dice al backend que quiere reemplazar todo lo que tiene ese ID y el PATCH es que actualice solo lo que yo le envio pero depende de como este construido el backend 
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json' 
        }

    });

    const updateUser = await res.json();

    console.log({ updateUser });

    return updateUser;
}