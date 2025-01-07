import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import NowStreaming from "./component/NowStreaming";
import AnimeDetails from "./component/AnimeDetails";
import TopAnime from "./component/TopAnime";
import SearchResults from "./component/SearchResults";

export default function App() {
  return (
    <div className="grid-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/TopAnime" element={<TopAnime />} />
          <Route path="/NowStreaming" element={<NowStreaming />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/results" element={<SearchResults />} />{" "}
        </Routes>
      </Router>
    </div>
  );
}
