import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((response) => {
        const fetchedResults = response.data.data;
        navigate("/results", { state: { results: fetchedResults } });
      })
      .catch((error) => {
        console.error("Error fetching anime ...", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          placeholder="Search for an anime..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </div>
  );
}
