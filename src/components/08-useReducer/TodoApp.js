import React, {useReducer} from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';


const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
  }
];


const TodoApp = () => {

  const [ todos ] = useReducer(todoReducer, initialState);

  console.log(todos);

  return(
    <div>
      <h1>Todo App</h1>
      <hr/>

      <ul>
        <li>Hola</li>
        <li>mundo</li>
        <li>asd</li>
      </ul>
    </div>
  );
}



export default TodoApp;