import './App.css';
import CountComponent from './components/CountComponent';
import { useRecoilState } from 'recoil';
import { counterState } from './store/store';

function App() {
  const [count, setCount] = useRecoilState(counterState); // Simple hook  to access the state and action

  const increment = () => setCount((prev) => prev + 1); // Increment action
  const decrement = () => setCount((prev) => prev - 1); // Decrement action

  return (
    <div>
      <CountComponent />
      <button onClick={increment}>Increment : {count}</button> {/* Call the increment action */}
      <br /> <br />
      <button onClick={decrement}>Decrement : {count}</button>{/* Call the decrement action */}
    </div>
  );
}

export default App;
