import todoStore, { Filters } from "../../store/todo.store";

let element;


/**
 * 
 * @param {String} elementId 
 */


export const renderPendingTodos = ( elementId ) => {
    if ( !element ) 
    element = document.querySelector( elementId );

    if ( !elementId )
    throw new Error( `Element ${ elementId } not founmd` );

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;

};

