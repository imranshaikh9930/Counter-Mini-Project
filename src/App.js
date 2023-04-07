import { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Counter
        counter={counter}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
