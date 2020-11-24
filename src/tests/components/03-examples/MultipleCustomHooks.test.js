import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');



describe('Tests in <MultipleCustomHooks /> component', () => {

  beforeEach(() => {
  
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    });
  
  });

  test('It should render correctly', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('It should show information', () => {
    
    useFetch.mockReturnValue({
      data: [{
        author: 'David Toledo',
        quote: 'Hello world'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks/>);
    
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello world');
    expect(wrapper.find('footer').text().trim()).toBe('David Toledo');
  });
});