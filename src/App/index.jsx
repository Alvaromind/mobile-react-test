import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import Router from "./components/Router";

const App = () => (
  <ReduxProvider store={store} >
    <Router />
  </ReduxProvider>
);

export default App;
