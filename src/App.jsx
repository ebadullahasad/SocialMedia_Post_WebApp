import { RouterProvider } from "react-router-dom";
import { router } from "./Config/Router/Router";
import { Provider } from "react-redux";
import store from "./Store/store";
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
