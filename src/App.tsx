import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";

const App: React.FC = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
      </Routes>
    </Router>
  );
};

export default App;
