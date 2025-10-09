import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onBtnClick = (e) => {
    // console.log(e);
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <h2
        style={{
          color: "blue",
          backgroundColor: "red",
        }}
      >
        {counter}
      </h2>
      <button onClick={onBtnClick}>Increase</button>
    </>
  );
};

export default Counter;
