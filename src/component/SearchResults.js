import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  if (results.length === 0) {
    return <div>No results found. Please try another search.</div>;
  }

  return (
    <div className="results-container">
      {results.map((anime) => (
        <Link
          to={`/anime/${anime.mal_id}`}
          key={anime.mal_id}
          className="anime-card"
        >
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <h3>{anime.title}</h3>
        </Link>
      ))}
    </div>
  );
}
