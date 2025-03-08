/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Card.css";

export const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle image loading
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError("Failed to load image");
  };

  return (
    <div className="movie-card">
      {isLoading && <div className="loading-placeholder">Loading...</div>}

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster"
        }
        alt={movie.Title}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: isLoading ? "none" : "block" }}
      />

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};
