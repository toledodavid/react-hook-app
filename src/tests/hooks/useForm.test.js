import '@testing-library/jest-dom';
import { renderHook,act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Tests in useForm custom hook', () => {

  const initialForm = {
    name: 'David',
    email: 'david@gmail.com'
  };

  test('It should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ formValues, handleInputChange, reset ] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('It should change form value (name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pedro'
        }
      });
    });

    const [ formValues ] = result.current;
    expect(formValues).toEqual({...formValues, name: 'Pedro'});
  });

  test('It should reset form to initial values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pedro'
        }
      });

      reset();
    });

    const [ formValues ] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});