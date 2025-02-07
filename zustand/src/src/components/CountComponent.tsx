import { useCounterStore } from '../store/store';

const CountComponent = () => {
  const count = useCounterStore((state) => state.count); // Access the count state
  return <h1>Count: {count}</h1>;
};

export default CountComponent;
