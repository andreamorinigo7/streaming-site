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
    <div className="anime-details">
      <div className="row ">
        <div className="col-6">
          <h1>{anime.title}</h1>

          <p className="ps-3 text-muted">
            {anime.title_japanese} | <em>{anime.title_english}</em>
          </p>
          <p>
            <strong>EPISODES:</strong> {anime.episodes || "N/A"}
          </p>
          <p>{anime.synopsis || "No synopsis available."}</p>
          <ul>
            <li>
              <strong>AIRED ON:</strong> {anime.aired?.string || "N/A"}
            </li>
            <li>
              <strong>Broadcast:</strong> {anime.broadcast.string || "N/A"}
            </li>
            <li>
              <strong>SCORE:</strong> {anime.score || "N/A"}
            </li>
            <li>
              <strong>STATUS:</strong> {anime.status || "N/A"}
            </li>
            <li>
              <strong>STUDIO:</strong> {anime.studios?.[0]?.name || "N/A"}
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
        <div className="details-trailer">
          <h1>Trailer</h1>
          {anime.trailer?.embed_url ? (
            <iframe
              width="560"
              height="315"
              src={anime.trailer.embed_url}
              title="Anime Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
