import { Fragment } from "react";
import Header from "./components/header/Header";
import Configs from "./pages/configsPage/Configs";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter >
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configs" element={<Configs />} />
        </Routes>
      </Fragment>
    </BrowserRouter>

  );
}

export default App;
