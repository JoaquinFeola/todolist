import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases';

const ElementIdDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
};


/**
 * 
 * @param {*String} elementId 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIdDs.TodoList, todos );
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
        displayTodos()
    } );

    // Elimina el todo de la lista
    todoListUl.addEventListener( 'click', ( e ) => {
        const element = e.target.closest( '[data-id]' );
        const elementId = element.getAttribute( 'data-id' );

        if ( e.target.className == 'destroy' )
        {
            todoStore.deleteTodo( elementId )
            displayTodos()
        }
    } );
};  