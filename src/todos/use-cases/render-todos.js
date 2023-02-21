import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./create-todo-html";

let element;

/**
 * 
 * @param {*String} elementId 
 * @param {*Array} todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {
    
    // todo referencia html
    if ( !element )
        element = document.querySelector( elementId );
    if ( !element )
        throw new Error( ` Element: ${ elementId } not found ` );

    element.innerHTML = '';


    todos.forEach( todo => {
        element.append( createTodoHtml( todo ) )
    } )
};