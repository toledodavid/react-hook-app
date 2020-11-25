import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';


describe('Tests in <TodoAdd /> component', () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should NOT call handleAddTodo function', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('It should call handleAddTodo function', () => {
    const value = 'Learn Node';

    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });

});