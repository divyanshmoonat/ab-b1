import C from "./C";
import store from "../redux/store/store";

const B = () => {
  const onStoreDataReceived = () => {
    console.log(store.getState());
    // Save the store's data in a useState() variable and render it
  };

  store.subscribe(onStoreDataReceived);

  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <h2>B Component</h2>
      <p>
        {/* Name : {data.data.name}, Age: {data.data.age} */}
      </p>
      <C />
    </div>
  );
};

export default B;
