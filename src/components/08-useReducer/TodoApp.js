import React, {useEffect, useReducer} from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import './styles.css';



const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Learn React',
  //   done: false
  // }];
};


const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //console.log(description);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  const handleDelete = (idTodo) => {
    const action = {
      type: 'delete',
      payload: idTodo
    }
    dispatch(action);
  }

  const handleToggle = (idTodo) => {
    const action = {
      type: 'toggle',
      payload: idTodo
    }

    dispatch(action);
  }

  return(
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr/>

      <div className="row">

        <div className="col-7">

          <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />

        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>

      </div>
    </div>
  );
}



export default TodoApp;