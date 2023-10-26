import { renderTable } from './presentation/render-table/render-table';
import { rendenButtons } from './presentation/render-buttons/render-buttons';
import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderModal } from './presentation/render-modal/render-modal';
import { saveUser } from './uses-cases/save-user';
import usersStore from './store/users-store';


export const UsersApp = async (element) => {
    
    element.innerHTML = 'Loading ...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    rendenButtons(element);
    renderAddButton(element);
    renderModal(element, async (userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
}