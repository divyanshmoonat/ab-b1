import { useDispatch } from "react-redux";
import { updateMobNo, updateName } from "../redux/slices/userSlice";

const C = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    // Update the data in redux store
    dispatch(updateName("Peter"));
    dispatch(updateMobNo("1111111111"));
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
