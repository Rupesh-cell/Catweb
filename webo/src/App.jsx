import React from "react";
import NavScroll from "./component/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";

const App = () => {
  return (
    <>
      <Router>
        <NavScroll />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
