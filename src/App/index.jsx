import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import { mobilesApi } from "api/mobilesApi";
import Router from "./components/Router";

const App = () => (
  <ApiProvider api={mobilesApi} >
    <Router />
  </ApiProvider>
);

export default App;
