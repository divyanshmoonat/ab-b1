import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import A from "./components/A";

function App() {
  return (
    <>
      <Provider store={store}>
        <A />
      </Provider>
    </>
  );
}

export default App;
