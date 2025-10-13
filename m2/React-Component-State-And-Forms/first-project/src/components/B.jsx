import C from "./C";
import { useContext } from "react";
import { Context } from "../App";

const B = () => {
  const data = useContext(Context);
  console.log(data);
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <h2>B Component</h2>
      <p>
        Name : {data.data.name}, Age: {data.data.age}
      </p>
      <C />
    </div>
  );
};

export default B;
