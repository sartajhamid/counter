import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {  
      setCount(count + 1);
    } else {
      alert("Cannot go beyond 20");
    }
  };

  const decreaseValue = () => {
    if (count > 0) {  
      setCount(count - 1);
    } else {
      alert("Cannot go less than 0!");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={decreaseValue}>Decrement</button>
    </>
  );
}

export default App;
