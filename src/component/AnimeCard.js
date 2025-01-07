import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnimeCard.css";

export default function AnimeCard({ anime }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/anime/${anime.mal_id}`);
  }

  return (
    <div>
      <div className="anime-card" onClick={handleClick}>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <h2>{anime.title}</h2>
      </div>
    </div>
  );
}
