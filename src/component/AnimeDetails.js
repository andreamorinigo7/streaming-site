import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AnimeDetails.css";

export default function AnimeDetails() {
  const [anime, setAnime] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setAnime(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime ...", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!anime) {
    return <div>Error fetching details. Please try again later.</div>;
  }

  return (
    <div>
      <div className="row anime-details">
        <div className="col-6">
          <h1>{anime.title}</h1>
          <p>
            <strong>EPISODES:</strong> {anime.episodes || "N/A"}
          </p>
          <p>{anime.synopsis || "No synopsis available."}</p>
          <ul>
            <li>
              <strong>AIRED ON:</strong> {anime.aired?.string || "N/A"}
            </li>
            <li>
              <strong>SCORE:</strong> {anime.score || "N/A"}
            </li>
            <li>
              <strong>STATUS:</strong> {anime.status || "N/A"}
            </li>
            <li>
              <strong>GENRE:</strong>{" "}
              {anime.genres?.map((genre) => genre.name).join(", ") || "N/A"}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src={anime.images?.jpg?.image_url || ""}
            alt={anime.title || "N/A"}
          />
        </div>
      </div>
    </div>
  );
}
