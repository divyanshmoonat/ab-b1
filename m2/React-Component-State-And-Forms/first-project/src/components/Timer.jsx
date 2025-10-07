import { useState } from "react";

const Timer = () => {
  //   let timer = 0; // Not allowed in react
  let [timer, setTimer] = useState(0);

//   let [userName, setUserName] = useState("");
//   setUserName("John");

//   setInterval(() => {
//     // timer = timer + 1; // Not allowed in react
//     setTimer(timer + 1);
//     console.log(timer);
//   }, 1_000);

  return (
    <div>
      <h2>Timer : {timer}</h2>
    </div>
  );
};

export default Timer;
