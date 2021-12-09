import logo from "./logo.svg";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import License from "./pages/license";

import Home from "./pages/home";
import CustomAppBar from "./components/customAppBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/license" exact element={<License />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
