
import { useState } from 'react';
import Button from './components/Button';
import Count from './components/Count';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
     <Button title = '+' setCount={setCount}/>
     <Count count={count}/>
     <Button title = '-' setCount={setCount}/>
    </div>
  );
}

export default App;
