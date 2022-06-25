import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./Components/Header/Header";
import { FriendsSearchList } from "./Components/FriendsSearchList/FriendsSearchList";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <FriendsSearchList />
      </div>
    </Provider>
  );
}

export default App;
