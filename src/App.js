// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - provider - wraps app  , connect - used in components
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
