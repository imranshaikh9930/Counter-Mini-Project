import "./App.css"

const Counter = (props) => {
  

    const {counter,handleIncrement,handleDecrement,handleReset} = props;
    
  return (
    <div>
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        {counter > 10 && <button onClick={handleReset}>GO BACK TO 0</button>}
      </div>
    </div>
  );
};

export default Counter;
