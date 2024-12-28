import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import NowStreaming from "./component/NowStreaming";
import AnimeDetails from "./component/AnimeDetails";
import TopAnime from "./component/TopAnime";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/TopAnime" element={<TopAnime />} />
          <Route path="/now-streaming" component={NowStreaming} />
          <Route path="/anime/:id" component={AnimeDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
