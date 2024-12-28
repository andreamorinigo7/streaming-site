import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AnimeDetails() {
  const [anime, setAnime] = useState("");
  const { id } = useParams();

  function handleResponse(response) {
    console.log(response.data.data);

    setAnime(response.data.data);
  }

  function fetchAnimeDetails(animeId) {
    axios.get(`https://api.jikan.moe/v4/anime/${animeId}`).then(handleResponse);
  }

  useEffect(
    function () {
      fetchAnimeDetails(id);
    },
    [id]
  );

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1>{anime.title}</h1>
          <p> EPISODES: {anime.episodes}</p>
          <p>{anime.synopsis}</p>
          <ul>
            <li>AIRED ON:</li>
            <li>SCORE:</li>
            <li>STATUS:{anime.status}</li>
          </ul>

          <span> GENRE: {anime.genres}</span>
        </div>

        <div className="col-6">
          <img src={anime.images.jpg.image_url} alt={anime.title} />
        </div>
      </div>
    </div>
  );
}
