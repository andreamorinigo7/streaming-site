import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import axios from "axios";

export default function TopAnime() {
  const [topAnimes, setTopAnimes] = useState("");

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((response) => setTopAnimes(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Top Anime</h1>
      <div>
        {topAnimes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
