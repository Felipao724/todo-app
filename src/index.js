import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

const tarea = new Todo('No te la jales cabron');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml( tarea );



