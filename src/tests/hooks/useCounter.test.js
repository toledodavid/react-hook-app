import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Tests in useCounter custom hook', () => {

  test('It should return default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('It should have counter value in 100', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test('It should increment counter by 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test('It should decrement counter by 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test('It should reset counter value to 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const {increment, reset} = result.current;

    act(() => {
      increment();
      reset();
    });

    const {counter} = result.current;
    expect(counter).toBe(100);
  });
  

});