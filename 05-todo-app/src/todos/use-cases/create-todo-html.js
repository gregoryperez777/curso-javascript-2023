export const createTodoHTML = (todo) => {

    const { done, description, id } = todo;


    if (!todo) throw new Error('A TODO object is required');

    const html = `
        <li class="${ done ? 'checked' : '' }" data-id=${ id }>
            <div class="view">
                <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
                <label>${ description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    if (done)
        liElement.classList.add('completed');

    return liElement;

};