import { memo } from "react";

const Child = (props) => {
  console.log("Child component", props);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <h2>Child Component</h2>
      {/* Counter: {props.counter} */}
    </div>
  );
};

export default memo(Child);

// fn => 0xasd56
// fn => 0x4s836