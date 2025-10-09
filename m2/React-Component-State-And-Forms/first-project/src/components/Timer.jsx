import { useState, useEffect } from "react";

const Timer = () => {
  //   let timer = 0; // Not allowed in react
  let [timer, setTimer] = useState(0);

  console.log("Timer");

  useEffect(() => {
    console.log("Component did mount -> useEffect");
    // Call the API here
    // setInterval(() => {
    //   // timer = timer + 1; // Not allowed in react
    //   // setTimer(timer + 1); // It won't work becuase timer is 0
    //   setTimer((prevTimer) => prevTimer + 1); // This will work, as it will fetch the most recent value of timer
    //   console.log("INSIDE TIMER", timer);
    // }, 1_000);

    return () => {
      // componentWillUnmount()
      // clearInterval();
    };
  }, []); // componentDidMount()

  useEffect(() => {
    console.log("Component did update -> useEfect");
  }); // componentDidUpdate()

  //   let [userName, setUserName] = useState("");
  //   setUserName("John");

  return (
    <div>
      <h2>Timer : {timer}</h2>
    </div>
  );
};

export default Timer;
