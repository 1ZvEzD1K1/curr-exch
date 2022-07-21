import React, { FC } from "react";
import { Provider } from "react-redux";
import Tabs from "./components/Tabs";
import store from "./redux/store";
import MainNavigator from "./screens/MainNavigator";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Tabs />
      <MainNavigator />
    </Provider>
  );
};

export default App;
