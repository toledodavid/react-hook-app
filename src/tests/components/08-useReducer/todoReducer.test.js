import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Tests for todoReducer', () => {

  test('It should return default state', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('It should add a new TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn Express',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

});