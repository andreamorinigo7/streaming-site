import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search for an anime..." />
      </form>
    </div>
  );
}
