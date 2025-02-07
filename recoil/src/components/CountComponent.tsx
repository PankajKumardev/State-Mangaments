import { useRecoilValue } from 'recoil';
import { counterState } from '../store/store';

const CountComponent = () => {
  const count = useRecoilValue(counterState); // Access the count state

  return <h1>Count: {count}</h1>; 
};

export default CountComponent;
