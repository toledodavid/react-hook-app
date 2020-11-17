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

          <form>
            <input type="text" 
                    name="description"
                    placeholder="Learn..."
                    autoComplete="off"
                    className="form-control"/>

            <button className="btn btn-outline-primary btn-block mt-1">Add</button>
          </form>
        </div>

      </div>
    </div>
  );
}



export default TodoApp;