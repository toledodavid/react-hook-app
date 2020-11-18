import React, {useReducer} from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { useForm } from '../../hooks/useForm';


const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
  }
];


const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

  console.log(description);

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

  return(
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr/>

      <div className="row">

        <div className="col-7">

          <ul className="list-group list-group-flush">
            {
              todos.map((todo, index) => (
                <li key={todo.id}
                    className="list-group-item">
                  <p className="text-center">{index + 1}. {todo.desc}</p>
                  <button className="btn btn-danger">Delete</button>
                </li>
              ))
            }
          </ul>

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