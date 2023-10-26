import { Todo } from "../todos/models/todo.model";

export const Filters =  {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad')
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
    console.log('InitStore ');
}

const loadStore = () => {
    if ( !localStorage.getItem('state') ) return;

    const { todos = [], filter = Filters.all } = JSON.parse(localStorage.getItem('state'));

    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

/**
 * Obtiene todas las tareas
 * @param {String} filter 
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All: 
            return [...state.todos];

        case Filters.Completed: 
            return state.todos.filter(todo => todo.done);

        case Filters.Pending: 
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * Añade una nueva tarea
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * Alterna el estado done de la tarea entre true y false
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {

        if (todo.id === todoId) {
            todo.done = !todo.done; 
        }

        console.log(todo);

        return todo;
    });
    saveStateToLocalStorage()
}

/**
 * Elimina una tarea
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

/**
 * Elimina todas la tareas completadas
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

/**
 * Modifica el filtro para mostrar las tareas 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {

    if (!Object.keys(Filters).includes(newFilter)) throw new Error('Este filtro no existe');  

    state.filter = newFilter;
    saveStateToLocalStorage();
}

/**
 * Obtiene el filtro actual
 */
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}