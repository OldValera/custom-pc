import { Fragment } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import UserConfItem from "./components/userConfItem/UserConfItem.js";
import UserConfig from "./components/userCongis/UserConfig";

function App() {
  return (
    <Fragment>
      <Home />
      <UserConfig />
    </Fragment>
  );
}

export default App;
