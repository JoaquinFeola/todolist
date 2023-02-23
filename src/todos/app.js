// IMPORTS
import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos, renderPendingTodos } from './use-cases';

const ElementIdDs = {
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
};


/**
 * 
 * @param {*String} elementId 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIdDs.TodoList, todos );
        updatePendingCount();

    };
    
    const updatePendingCount = ( ) => {
        renderPendingTodos( ElementIdDs.PendingCountLabel );
        
    };
    
    // cuando la funcion app se llama
    (() => {
        const app = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos()
    })();

    // referencias html
    const newDescriptionInput = document.querySelector( ElementIdDs.NewTodoInput );
    const todoListUl = document.querySelector( ElementIdDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIdDs.ClearCompleted );
    const filtersLi = document.querySelectorAll( ElementIdDs.TodoFilters );

    // listeners
    newDescriptionInput.addEventListener( 'keyup', ( event ) => {
            
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = ''; 
        

    } );
    
    // Marca como hecho en la lista de todos
    todoListUl.addEventListener( 'click', ( e ) => {
        const element = e.target.closest( '[data-id]' );
        const elementDataId = element.getAttribute( 'data-id' );
        todoStore.toggleTodo( elementDataId );
        displayTodos();

    } );

    // Elimina el todo de la lista
    todoListUl.addEventListener( 'click', ( e ) => {
        const isDestroyElement = e.target.className === 'destroy';
        const element = e.target.closest( '[data-id]' );
        if ( !element || !isDestroyElement ) return;

        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
    } );

    // Elimina todos los todos compeltados de la lsita
    clearCompletedButton.addEventListener( 'click', () => {
        todoStore.deleteCompleted();
        displayTodos()
    } )

    filtersLi.forEach( element => {

        element.addEventListener( 'click', ( element ) => {
            filtersLi.forEach( el => el.classList.remove( 'selected' ) );
            element.target.classList.add( 'selected' );

            switch( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
            }
            displayTodos();
        } );

    } );

};  