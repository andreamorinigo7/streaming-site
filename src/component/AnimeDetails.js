import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

  if (!anime && !loading) {
    return <div>Error fetching details. Please try again later.</div>;
  } else {
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

            <span>
              {" "}
              GENRE:{" "}
              {anime.genres.map((genre) => genre.name).join(", ") || "N/A"}
            </span>
          </div>

          <div className="col-6">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </div>
        </div>
      </div>
    );
  }
}
