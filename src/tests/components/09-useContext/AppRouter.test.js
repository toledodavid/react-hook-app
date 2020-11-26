import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Tests for <AppRouter /> component', () => {

  const user = {
    id: 1,
    name: 'David'
  };

  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});