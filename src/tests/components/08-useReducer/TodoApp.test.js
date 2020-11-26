import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Tests in <TodoApp /> component', () => {

  const wrapper = shallow(<TodoApp/>);

  Storage.prototype.setItem = jest.fn();

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should add two new TODOs', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('It should delete a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
  });

});