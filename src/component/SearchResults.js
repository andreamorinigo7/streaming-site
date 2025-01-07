import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults() {
  const location = useLocation();
  let results = location.state?.results || [];
  if (results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div>
      {results.map((anime) => (
        <Link to={`/anime/$anime.mal_id`} key={anime.mal_id}>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <h3>{anime.title}</h3>
        </Link>
      ))}
    </div>
  );
}
