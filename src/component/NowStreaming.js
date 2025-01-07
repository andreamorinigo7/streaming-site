import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard";

export default function NowStreaming() {
  const [streaming, setStreaming] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => setStreaming(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Now Streaming</h1>
      <div>
        {streaming.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
