import React from 'react';
import { useForm } from '../../hooks/useForm';



const TodoAdd = ({handleAddTodo}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

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

    handleAddTodo(newTodo);
    reset();
  }


  return(
    <>
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
    </>
  );
}


export default TodoAdd;