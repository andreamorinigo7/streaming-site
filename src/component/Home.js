import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <header className="video-header">
        <video autoPlay loop muted className="background-video">
          <source
            src="/images/mylivewallpapers-com-Cartoon-Luffy-One-Piece-4K.mp4"
            type="video/mp4"
          />
        </video>
      </header>
    </div>
  );
}
