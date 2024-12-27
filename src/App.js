import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
