import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import GetStarted from "./GetStarted";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> {/* This will appear on all pages */}
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
