// Import necessary dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";

const App: React.FC = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} /> */}

        <Route path="/" element={<div>home</div>} />
        <Route path="expenses" element={<div>expenses</div>} />
      </Routes>
    </Router>
  );
};

export default App;
