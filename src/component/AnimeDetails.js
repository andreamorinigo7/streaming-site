import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AnimeDetails() {
  const [anime, setAnime] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  function handleResponse(response) {
    console.log(response.data.data);

    setAnime(response.data.data);
    setLoading(false);
  }

  function handleError(error) {
    console.error("Error fetching anime ...", error);
    setLoading(false);
  }

  function fetchAnimeDetails(animeId) {
    axios
      .get(`https://api.jikan.moe/v4/anime/${animeId}`)
      .then(handleResponse)
      .catch(handleError);
  }

  useEffect(
    function () {
      setLoading(true);
      fetchAnimeDetails(id);
    },
    [id]
  );

  if (loading) {
    return <div> Loading ....</div>;
  }

  if (!anime) {
    return <div>No details available for this anime yet.</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1>{anime.title}</h1>
          <p> EPISODES: {anime.episodes || "N/A"}</p>
          <p>{anime.synopsis}</p>
          <ul>
            <li>AIRED ON:{anime.aired.string || "N/A"}</li>
            <li>SCORE:{anime.score || "N/A"}</li>
            <li>STATUS:{anime.status || "N/A"}</li>
          </ul>

          <span> GENRE: {anime.genres || "N/A"}</span>
        </div>

        <div className="col-6">
          <img src={anime.images.jpg.image_url} alt={anime.title} />
        </div>
      </div>
    </div>
  );
}
