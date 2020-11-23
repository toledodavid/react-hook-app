import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';


describe('Tests in <HookApp/> component', () => {

  test('It should render correnctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });

});