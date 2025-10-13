import { useContext } from "react";
import { Context } from "../App";

const C = () => {
  const ctx = useContext(Context);
  console.log(ctx);

  const onBtnClick = () => {
    // Update the data in context
    ctx.setData({
      name: "Jack",
      age: 20,
    });
  };

  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <h2>C Component</h2>
      <button onClick={onBtnClick}>Click to update data</button>
    </div>
  );
};

export default C;
