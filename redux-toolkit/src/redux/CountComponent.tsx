
import { useAppSelector } from './hooks';

// without doing prop drilling, we can access the state directly with the help of the useAppSelector hook anywhere in the app
// Also , anywhere state changes, the component will re-render automatically with the updated state

const CountComponent = () => {
  const count = useAppSelector((s) => s.counter);
  return (
      <h1>Count: {count} </h1>
  );};

export default CountComponent;
