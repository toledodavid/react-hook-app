import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Tests in useCounter custom hook', () => {

  test('It should return default values', () => {
    const { result } = renderHook(() => useCounter());
    console.log(result.current);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
  

});