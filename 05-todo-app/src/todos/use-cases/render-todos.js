import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

let element;

/**
 * Renderiza las tareas en el html
 * @param {String} elementId 
 * @param {Arra<String>} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    if (!element)
        element = document.querySelector(elementId);
    
    if (!element) throw new Error(`Element ${elementId} not found`)

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) );
    });
};