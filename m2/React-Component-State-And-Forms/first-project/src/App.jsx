import "./App.css";

import Child from "./components/Child";
import { useState, useMemo, useCallback } from "react";

const fib = (n) => {
  console.log(n);
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}; // Heavy computational operation

function App() {
  const [counter, setCounter] = useState(0);
  // const name = "John";

  const onBtnClick = () => {
    setCounter(counter + 1);
  };

  const [n, setN] = useState(10);

  const onFibIncreaseClick = () => {
    setN(n + 1);
  };

  const fibonacci = useMemo(() => {
    return fib(n);
  }, [n]);

  const fn = useCallback(() => {
    console.log("Fn called");
  }, []);
  
  // useCallback(callback-fn, deps)
  // useMemo(callback-fn, deps)
  // useEffect(callback-fn, deps)

  return (
    <>
      Counter : {counter}
      <button onClick={onBtnClick}>Increase</button>
      <br />
      <Child
        // counter={counter}
        // name={name}
        fn={fn}
      />
      Fibonacci of {n} : {fibonacci}
      <button onClick={onFibIncreaseClick}>Increase Fibonacci</button>
    </>
  );
}

export default App;
