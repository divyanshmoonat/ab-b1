import C from "./C";
import { useSelector } from "react-redux";

const B = () => {
  const data = useSelector((state) => state.user);
  console.log(data);

  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <h2>B Component</h2>
      <p>Name : {data.name}, Mob No: {data.mobNo}</p>
      <C />
    </div>
  );
};

export default B;
