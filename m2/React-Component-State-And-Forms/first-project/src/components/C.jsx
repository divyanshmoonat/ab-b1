import store from "../redux/store/store";

const C = () => {
  const onBtnClick = () => {
    // Update the data in redux store
    store.dispatch({
      type: "UPDATE_NAME",
      payload: "Peter",
    });
    store.dispatch({
      type: "UPDATE_MOBNO",
      payload: "111111111",
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
