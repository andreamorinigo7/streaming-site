import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import GetStarted from "./GetStarted";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <NavBar /> {/* appear on all pages */}
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
