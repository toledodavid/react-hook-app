import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests in <TodoListItem /> component', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(<TodoListItem todo={demoTodos[0]} index={0} handleDelete={handleDelete} handleToggle={handleToggle} />);

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('It should call handleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('It should show paragraph text correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('It should have className complete if TODO.done === true', () => {

    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });

});
