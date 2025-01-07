import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  function handleResponse(response) {
    setResults(response.data.data);
    navigate("/results", { state: { results } });
  }
  function handleSearchResults(event) {
    setQuery(event.target.value);
  }

  function handleError(error) {
    console.error("Error fetching anime ...", error);
  }

  function handleSearch(event) {
    event.preventDefault();

    axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then(handleResponse)
      .catch(handleError);
  }

  function handleResultClick(id) {
    navigate(`/anime/${id}`);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          placeholder="Search for an anime..."
          onChange={handleSearchResults}
        />
      </form>
      <div>
        {results.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => handleResultClick(anime.mal_id)}
          >
            {anime.title}
          </div>
        ))}
      </div>
    </div>
  );
}
