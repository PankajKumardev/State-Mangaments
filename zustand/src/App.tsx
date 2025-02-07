import './App.css';
import CountComponent from './src/components/CountComponent';
import { useCounterStore } from './src/store/store';

function App() {
  const { count, increment, decrement } = useCounterStore(); // Access state and actions

  return (
    <div>
      <CountComponent />
      <button onClick={increment}>Increment : {count}</button> {/* Call the increment action */}
      <br /> <br />
      <button onClick={decrement}>Decrement : {count}</button> {/* Call the decrement action */}
    </div>
  );
}

export default App;
