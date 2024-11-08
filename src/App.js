import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import GetStarted from "./GetStarted";
import Home from "./Home";
import TvShow from "./TvShow";
import Movies from "./Movies";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <NavBar /> {/* appear on all pages */}
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshow" element={<TvShow />} />
        </Routes>
      </Router>
      <br />
      <h4>Mystery</h4>
      <Home />
      <br />
      <Home />
    </div>
  );
}

export default App;
