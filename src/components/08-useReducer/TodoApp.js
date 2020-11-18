import React, {useEffect, useReducer} from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { useForm } from '../../hooks/useForm';
import TodoList from './TodoList';


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

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //console.log(description);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    reset();
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
          <h4>Add TODO</h4>
          <hr/>

          <form onSubmit={handleSubmit}>
            <input type="text" 
                    name="description"
                    placeholder="Learn..."
                    autoComplete="off"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange} />

            <button type="submit" className="btn btn-outline-primary btn-block mt-1">Add</button>
          </form>
        </div>

      </div>
    </div>
  );
}



export default TodoApp;