
import { useState } from 'react';
import Button from './components/Button';
import Count from './components/Count';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h2>Hello World</h2>
      <span>03.02.2023</span>
      <p>16:06</p>
     <Button title = '+' setCount={setCount}/>
     <Count count={count}/>
     <Button title = '-' setCount={setCount}/>
    </div>
  );
}

export default App;
