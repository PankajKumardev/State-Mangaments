import './App.css';
import CountComponent from './redux/CountComponent';
import { useAppDispatch, useAppSelector } from './redux/hooks'; // Importing the custom hooks
import { decrement, increment } from './redux/slices/counter'; // Importing the actions from the slice

function App() {
  const count = useAppSelector((state) => state.counter); // Selecting the counter state(value)
  const dispatch = useAppDispatch();
  return (
    <div>
      <CountComponent/> 
      <button onClick={() => {dispatch(increment())}}>Increment : {count}</button> {/* use the dispatch function to dispatch the increment action */}
      <br /> <br />
      <button onClick={() => {dispatch(decrement())}}>Decrement : {count}</button> {/* use the dispatch function to dispatch the decrement action */}
    </div>
  );
}

export default App;
