import React from "react";
import "./App";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div class="hero">
      <Link to="/Home" class="btn btn-branding p-2 rounded">
        Let's start watching !
      </Link>
    </div>
  );
}
