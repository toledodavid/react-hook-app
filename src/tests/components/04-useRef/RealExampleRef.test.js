import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Tests for <RealExampleRef /> component', () => {

  const wrapper = shallow(<RealExampleRef/>);

  test('It should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('It should <MultipleCustomHooks /> component', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});