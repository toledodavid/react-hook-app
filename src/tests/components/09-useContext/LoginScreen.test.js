import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen /> component', () => {

  const user = {
    name: 'David',
    email: 'david@gmail.com'
  };

  const setUser = jest.fn();
  
  const wrapper = mount(
    <UserContext.Provider value={{setUser}}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should eject setUser with an expected argument', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({id:123, name:'David'});
  });

});